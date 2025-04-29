"use client"
import { Box, Button, Input, Text } from "@chakra-ui/react";
import prisma from "@/lib/prisma";
import { useForm } from "react-hook-form";
import { signup } from "../api/auth/auth";
import { useEffect } from "react";


export default function Home() {
    const {
        register,
        formState: { errors },
    } = useForm<{username: string, password: string}>();
    useEffect(() => {
        //ログイン情報リセット
        localStorage.setItem("userID", "0");
    }, []);
    return (
        <Box display="flex" justifyContent='center'>
            <Box bg="#EEE" w="40%" marginTop="5%" padding="5%" paddingTop="3%" paddingBottom="5%">
                <Box>
                    <Text as="b" fontSize="2xl">サインアップ</Text>
                </Box>
                <Box>
                    <form action={signup}>
                        <Text as="b" fontSize="xl">ユーザ名</Text>
                        <Input type="text" bg="white" {...register("username")}></Input>
                        <Text as="b" fontSize="xl">パスワード</Text>
                        <Input type="text" bg="white" {...register("password")}></Input>
                        <Box marginTop="3%">
                            <Button type="submit" colorPalette="orange" variant="subtle">
                                サインアップ
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}
