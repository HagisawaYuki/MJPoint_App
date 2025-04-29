"use client"
import { Box, Link, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    //ログイン情報リセット
    localStorage.setItem("userID", "0");
  }, []);
  return (
    <Box display="flex" justifyContent='center' >
        <Box bg="#EEE" w="40%" marginTop="5%" paddingTop="5%" paddingBottom="5%" display="flex" justifyContent='center'>
            <Box display="block">
                <Box>
                    <Link href="/signup">
                        <Text as="b" fontSize="xl">サインアップ</Text>
                    </Link>
                </Box>
                <Box marginTop="20%">
                    <Link href="/login">
                        <Text as="b" fontSize="xl">ログイン</Text>
                    </Link>
                </Box>
            </Box>    
        </Box>  
    </Box>
  );
}
