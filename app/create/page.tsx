"use client"
import { Box, Link, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        const _userID = Number(localStorage.getItem("userID"));
        console.log(_userID)
      if(_userID === 0){
        router.push("/")
      }
    }, [])
  return (
    <Box display="flex" justifyContent='center' >
        <Box bg="#EEE" w="40%" marginTop="5%" paddingTop="5%" paddingBottom="5%" display="flex" justifyContent='center'>
            <Box display="block">
                <Box>
                    <Link href="/create/player">
                        <Text as="b" fontSize="xl">プレイヤー追加</Text>
                    </Link>
                </Box>
                <Box marginTop="20%">
                    <Link href="/create/game">
                        <Text as="b" fontSize="xl">ゲーム新規作成</Text>
                    </Link>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}