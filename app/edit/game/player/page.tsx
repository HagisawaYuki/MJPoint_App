"use client"
import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlayerWithHanshuangScore } from "@/constant/typeConst";
import { editHanshuangScorePlayer, searchPlayer, searchPlayerByID } from "@/lib/action";

export default function Home() {
    const router = useRouter();
    // const [gamePlayersID, setGamePlayersID] = useState<number[]>();
    const [gamePlayers, setGamePlayers] = useState<PlayerWithHanshuangScore[]>();
    const [allPlayers, setAllPlayers] = useState<PlayerWithHanshuangScore[]>();
    const [beforePlayer, setBeforePlayer] = useState<PlayerWithHanshuangScore>();
    const [afterPlayer, setAfterPlayer] = useState<PlayerWithHanshuangScore>();

    const onSubmit = () => {
        //プレイヤーを変更
        if(gamePlayers && afterPlayer){
            for(const player of gamePlayers){
                if(player.id === beforePlayer?.id){
                    for(const score of player.scores){
                        editHanshuangScorePlayer(afterPlayer?.id, score.id);
                    }
                }
            }
            router.push("/home/game");
        }
    }
    useEffect(() => {
        const editGamePlayerInit = async () => {
            const _userID = Number(localStorage.getItem("userID"));
            if(_userID === 0){
                router.push("/")
            }
            //localStorageから試合するプレイヤーのidを取り出す
            const local_players =  localStorage.getItem("players");
            //試合参加player情報をplayerIDから取得し、保存
            if(local_players){
                const _playersID: number[] = JSON.parse(local_players);
                // setGamePlayersID(_playersID);
                const searchedPlayer1 = await searchPlayerByID(_playersID[0]);
                const searchedPlayer2 = await searchPlayerByID(_playersID[1]);
                const searchedPlayer3 = await searchPlayerByID(_playersID[2]);
                const searchedPlayer4 = await searchPlayerByID(_playersID[3]);
                if(searchedPlayer1 && searchedPlayer2 && searchedPlayer3 && searchedPlayer4){
                    setGamePlayers([searchedPlayer1, searchedPlayer2, searchedPlayer3, searchedPlayer4]);
                }
                
                //全player情報を取得
                const _players = await searchPlayer(_userID);
                setAllPlayers(_players.filter((player) => !_playersID.includes(player.id)));
            }
            
        }
        editGamePlayerInit();
    },[router]);
    return (
        <Box>
            <Box>
                <Box>
                    <Text>変更するプレーヤーを選択</Text>
                </Box>
                <Box>
                    {gamePlayers && gamePlayers.map((player) => {
                        return(
                            <Button colorPalette="blue" variant="subtle" key={player.id} onClick={() => {
                                setBeforePlayer(player);
                            }}>
                                <Text>{player.name}</Text>
                            </Button>
                        );
                    })}
                </Box>
                <Box>
                    <Text>{beforePlayer?.name}</Text>
                </Box>
                <Box>
                    <Text>変更後のプレーヤーを選択</Text>
                </Box>
                <Box>
                    {allPlayers && allPlayers.map((player) => {
                        return(
                            <Button colorPalette="blue" variant="subtle" key={player.id} onClick={() => {
                                setAfterPlayer(player);
                            }}>
                                <Text>{player.name}</Text>
                            </Button>
                        );
                    })}
                </Box>
                <Box>
                    <Text>{afterPlayer?.name}</Text>
                </Box>
                <Box>
                    <Button colorPalette="orange" variant="subtle" onClick={() => onSubmit()}>
                        <Text>変更</Text>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
