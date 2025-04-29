"use client"
import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [playerID, setPlayerID] = useState<number>();
  const [playerName, setPlayerName] = useState<string>();
  useEffect(() => {
      const _userID = Number(localStorage.getItem("userID"));
      if(_userID === 0){
        router.push("/")
      }
      setPlayerID(Number(localStorage.getItem("editPlayerID")));
      const localPlayerName = localStorage.getItem("editPlayerName")
      localPlayerName && setPlayerName(JSON.parse(localPlayerName));
  }, []);
  return (
    <Box>
        <Box>
            <Text fontSize="2xl" as="b">{playerName}のデータ</Text>
            <Button colorPalette="orange" variant="subtle" onClick={() => {
              router.push("/edit/player")
            }}>
              <Text>名前を変更する</Text>
            </Button>
        </Box>
        
    </Box>
  );
}
