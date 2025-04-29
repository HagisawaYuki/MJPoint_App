
'use server'

import prisma from "./prisma"
import { redirect } from "next/navigation";

/**User情報関連 */
//Userを検索
export const searchUser = async (username: string) => {
    //名前からuserを検索
    const user = await prisma.user.findUnique({
        where: { username },
    });
    return user;
}
//Userを作成
export const createUser = async (username: string, password: string) => {
    await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    });
}

/**Player情報関連 */
//Playerを全検索
export const searchPlayer = async (userId: number) => {
    const players = await prisma.player.findMany({
        where: { userId },
        include: {
            scores: true,
        },
    });
    return players;
}

//１playerを探索
export const searchPlayerByID = async (id: number) => {
    const player = await prisma.player.findUnique({
        where: { id },
        include: {
            scores: true,
        },
    });
    return player ? player : null;
};

//Playerを新規作成
export const addPlayer = async (formData: FormData) => {
    //formDataから入力された名前を取り出す
    const name = formData.get('name') as string;
    const userId = Number(formData.get("userID"))
    //名前が入力されていたらplayer情報を新規作成
    if(name){
        await prisma.player.create({
            data: {
                name: name,
                userId: userId
            }
        });
    }
}

//１Playerを削除
export const deletePlayer = async (id: number) => {
    //playerIDからplayerを削除
    await prisma.player.delete({
        where: { id },
    });
};

//1Playerを編集
export const editPlayer = async (formData: FormData) => {
    const id = Number(formData.get("playerID"));
    const name = formData.get("name")?.toString();
    await prisma.player.update({
        where: { id }, // 編集対象のID
        data: {
            name: name
        },
    });
}


/**Game情報関連 */
//game情報を全検索
export const searchGames = async (userId: number) => {
    const games = await prisma.game.findMany({
        where: { userId },
        include: {
            hanshuangs: {
              include: {
                scores: true, // ← ここが重要
              },
            },
          },
    });
    return games;
}

//Game作成
export const createGame = async (formData: FormData) => {
    const userId: number = Number(formData.get("userID"));
    //4人選択されていたら"1"、されていなかったら"0"
    const isPlayers: boolean = formData.get("isPlayers") === "1" ? true : false;
    //4人選択されていなかったらreturnして下の処理をしない
    if(!isPlayers){
        return;
    }
    //一旦非表示
    //gameを作成
    //formDataから日付とplayerを取り出す
    const date = formData.get('date') as string;
    
    //日付が入力されていたらgame情報を新規作成
    if(date){
      await prisma.game.create({
          data: {
            date: date,
            userId: userId
          }
      })
    }

    //新規作成だからqueryでcreate=trueをつけて/home/gameへ飛ぶ
    redirect("/home/game?create=true");
  }

//追加したgame(データベース上で一番したの情報)のidを検索
export const searchLatestGameID = async (): Promise<number> => {
    const latestGameID = await prisma.game.findFirst({
        orderBy: {
            id: 'desc',
        },
        select: {
            id: true,
        },
    });
    return latestGameID ? latestGameID.id : 0;
}

//追加したgameを検索
export const searchLatestGame = async () => {
    //一番直近のgameIDを取得
    const id = await searchLatestGameID();
    //gameIDからgame情報を取得
    const game = await prisma.game.findUnique({
        where: { id },
        include: {
            hanshuangs: {
              include: {
                scores: true, // ← ここが重要
              },
            },
        },
    });
    return game ? game : {id: 0, date: ""};
}

//gameIDから１ゲームを探索
export const searchGameByID = async (id: number) => {
    const game = await prisma.game.findUnique({
        where: {  id },
        include: {
            hanshuangs: {
              include: {
                scores: true, // ← ここが重要
              },
            },
        },
    });
    return game;
};


/**Hanshuang情報関連 */
//１半荘を探索
export const searchHanshuangByID = async (id: number) => {
    const hanshuang = await prisma.hanshuang.findUnique({
        where: { id },
        include: {
            scores: true,
        },
    });
    return hanshuang ? hanshuang : null;
};
//１ゲームの半荘を検索(gameIDで検索)
export const searchHanshuangByGameID = async (gameID: number) => {
    //gameIDから１ゲームの全半荘情報を取り出す
    const hanshuangs = await prisma.hanshuang.findMany({
        where: { 
            gameId : gameID 
        },
        include: {
            scores: true,
        },
    });
    return hanshuangs;
}

//半荘を新規作成
export const createHanshuang = async (id: number) => {
    //追加元のgameIDから半荘情報を新規作成
    const hanshuang = await prisma.hanshuang.create({
        data: {
            gameId: id
        }
    })
    return hanshuang;
}


/**HanshuangScore情報関連 */
//1半荘の4人分のHanshuangScore作成
export const createHanshuangScores = async (formData: FormData) => {
    //formDataからplayers・scores・chipsを取り出して配列に保管
    const players = [
        Number(formData.get('player1')), 
        Number(formData.get('player2')), 
        Number(formData.get('player3')), 
        Number(formData.get('player4'))
    ];
    const scores = [
        Number(formData.get('score1')), 
        Number(formData.get('score2')), 
        Number(formData.get('score3')), 
        Number(formData.get('score4'))
    ];
    const chips = [
        Number(formData.get('chip1')), 
        Number(formData.get('chip2')), 
        Number(formData.get('chip3')), 
        Number(formData.get('chip4'))
    ];
    const gameID = Number(formData.get('gameID'));
    const hanshuang = await createHanshuang(gameID);
    
    //4人ぶんの半荘スコア情報をループ文で新規作成
    for(let i = 0; i < 4; i++){
        await prisma.hanshuangScore.create({
            data: {
                playerId: players[i],
                hanshuangId: hanshuang.id,
                score: scores[i],
                chip: chips[i]
            }
        })
    }      
    // /home/gameへ飛ぶ
    redirect("/home/game")
}

//gameのplayerを編集
export const editHanshuangScorePlayer = async (playerID: number, hanshuangScoreID: number) => {
    await prisma.hanshuangScore.update({
        where: { id: hanshuangScoreID }, // 編集対象のID
        data: {
            playerId: playerID
        },
    });
}

//gameのscoreを編集
export const editScoreOfHanshuangScore = async (formData: FormData) => {
    await prisma.hanshuangScore.update({
        where: { id: Number(formData.get("scoreID")) }, // 編集対象のID
        data: {
            score: Number(formData.get("score")),
            chip: Number(formData.get("chip"))
        },
    });
    redirect("/home/game")
}

