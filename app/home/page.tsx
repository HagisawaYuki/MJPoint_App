"use client"
import { Box, Text, Table, Button} from '@chakra-ui/react';
import { searchGames, searchPlayer } from "@/lib/action";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { GameWithHanshuangsAndScores, PlayerWithHanshuangScore } from '@/constant/typeConst';

type GamesTable = {
  playerID: number;
  name: string;
  scores: {
    game: GameWithHanshuangsAndScores;
    score: number;
    chip: number;
  }[];
}[];


export default function Home() {
  const router = useRouter();
  //全プレイヤー情報
  const [players, setPlayers] = useState<PlayerWithHanshuangScore[]>();
  const [games, setGames] = useState<GameWithHanshuangsAndScores[]>();
  const [gamesTable, setGamesTable] = useState<GamesTable>();
  const [t_gamesTable, setT_GamesTable] = useState<{game: GameWithHanshuangsAndScores, score: number, chip: number}[][]>();
  const [sumScores, setSumScores] = useState<{name: string; sumScore: number; chip: number}[]>();
  

  //Game情報からプレイヤーごとにテーブル形式で配列にまとめる関数
  const createGameTable = (games: GameWithHanshuangsAndScores[], players: PlayerWithHanshuangScore[]) => {
    //playerごとにループ
    return players.map(player => {
      //1playerの全スコアの配列
      const scores: {game: GameWithHanshuangsAndScores; score: number, chip: number}[] = [];
      //gameごとにループ
      for (const game of games) {
        // 1つのゲームに含まれるすべての半荘
        let sum_score = 0;
        let final_chip = 0;
        for (const hanshuang of game.hanshuangs) {
          const scoreEntry = hanshuang.scores.find(score => score.playerId === player.id);
          if (scoreEntry) {
            sum_score = sum_score + scoreEntry.score; 
            final_chip = scoreEntry.chip;
          }
        }
        scores.push({game: game, score: sum_score, chip: final_chip});
      }
      return {
        playerID: player.id,
        name: player.name,
        scores,
      };
    });
  }

  //各プレイヤーの通算を計算する関数
  const calSum = (_gamesTable: GamesTable) => {
    
    const _sumScores: {name: string; sumScore: number, chip: number}[] = [];
      
    for(const playerTable of _gamesTable){
      let sum = 0;
      let chip = 0;
      for(const score of playerTable.scores){
        sum = sum + score.score;
        chip = chip + score.chip;
      }
      _sumScores.push({name: playerTable.name, sumScore: sum, chip: chip});
    }
    setSumScores(_sumScores);
  }

  //最初に全player情報を取得
  useEffect(() => {
    //全player・gameを取得する関数
    const homePageInit = async () => {
      const _userID = Number(localStorage.getItem("userID"));
      console.log(_userID)
      if(_userID === 0){
        router.push("/")
      }
      //全player・gameを取得して保存
      const searchedPlayers: PlayerWithHanshuangScore[] = await searchPlayer(_userID);
      const searchedGames: GameWithHanshuangsAndScores[] = await searchGames(_userID);
      setPlayers(searchedPlayers);
      setGames(searchedGames);
      //gamesTableを作成して保存
      const _gamesTable = createGameTable(searchedGames, searchedPlayers);
      setGamesTable(_gamesTable);
      //scoresの長さを計算（ゲーム数）
      const numRows = _gamesTable[0]?.scores.length || 0;
      // 縦横反転して保存
      const transposed = Array.from({ length: numRows }, (_, rowIndex) =>
        _gamesTable.map(player => player.scores[rowIndex] ?? '')
      );
      setT_GamesTable(transposed);

      //各プレイヤーの通算を計算する
      calSum(_gamesTable);
    }
    homePageInit();
  }, []);

  return (
    <Box>
      <Table.Root size="sm" striped showColumnBorder>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader textAlign="center">
          </Table.ColumnHeader>
          {gamesTable?.map((player, idx) => (
            <Table.ColumnHeader key={idx} textAlign="center">
              <Button bg="white" onClick={() => {
                localStorage.setItem("editPlayerID", JSON.stringify(player.playerID));
                localStorage.setItem("editPlayerName", JSON.stringify(player.name));
                router.push("/home/player")
              }}>
                <Text color="black" as="b">{player.name}</Text>
              </Button>
              
            </Table.ColumnHeader>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {t_gamesTable?.map((row, rowIndex) => (
          <Table.Row key={rowIndex} onClick={() => {
            localStorage.setItem("gameID", JSON.stringify(row[0].game.id));//仮でgameID:2を保存
            router.push("/home/game")
          }}>
            <Table.Cell textAlign="center">
              <Text as="b">{row[0].game.date}</Text>
            </Table.Cell>
            {row.map((score, colIndex) => (
              <Table.Cell key={colIndex} textAlign="center">
                <Box textAlign="center">
                  <Text color={score.score < 0 ? "red" : score.score === 0 ? "black" : "blue"}>{score.score}</Text>
                  <Text color={score.chip < 0 ? "red" : score.chip === 0 ? "black" : "blue"}>{score.chip}</Text>
                  <Text color={score.score + score.chip*100 < 0 ? "red" : score.score + score.chip*100 === 0 ? "black" : "blue"} as="b">{score.score + score.chip*100}</Text>
                </Box>
                
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
        <Table.Row>
          <Table.Cell textAlign="center">
            <Text as="b">合計値</Text>
          </Table.Cell>
            {sumScores && sumScores.map((score, colIndex) => (
              <Table.Cell key={colIndex} textAlign="center">
                <Box textAlign="center">
                  <Text color={score.sumScore < 0 ? "red" : score.sumScore === 0 ? "black" : "blue"}>{score.sumScore}</Text>
                  <Text color={score.chip < 0 ? "red" : score.chip === 0 ? "black" : "blue"}>{score.chip}</Text>
                  <Text color={score.sumScore + score.chip*100 < 0 ? "red" : score.sumScore + score.chip*100 === 0 ? "black" : "blue"} as="b">{score.sumScore + score.chip*100}</Text>
                </Box>
              </Table.Cell>
            ))}
          
        </Table.Row>
      </Table.Body>
    </Table.Root>
    </Box>
  );
}