"use client"
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { login } from "../api/auth/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<{username: string, password: string}>();

    const submit = async () => {
        const isLogin = await login(username, password);
        if(isLogin){
            router.push("/home")
        }
    }

    useEffect(() => {
        //ログイン情報リセット
        localStorage.setItem("userID", "0");
    }, []);
    return (
        <Box display="flex" justifyContent='center' >
            <Box bg="#EEE" w="40%" marginTop="5%" padding="5%" paddingTop="3%" paddingBottom="5%">
                <Box>
                    <Text as="b" fontSize="2xl">ログイン</Text>
                </Box>
                <Box>
                    <form onSubmit={handleSubmit(submit)}>
                        <Text as="b" fontSize="xl">ユーザ名</Text>
                        <Input type="text" bg="white" {...register("username")} onChange={(e) => {
                            setUsername(e.target.value);
                        }}></Input>
                        <Text as="b" fontSize="xl">パスワード</Text>
                        <Input type="text" bg="white" {...register("password")} onChange={(e) => {
                            setPassword(e.target.value);
                        }}></Input>
                        <Box marginTop="3%">
                            <Button type="submit" colorPalette="orange" variant="subtle">
                                ログイン
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}
