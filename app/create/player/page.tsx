"use client"
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { addPlayer } from "@/lib/action";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function Create() {

    const router = useRouter();
    const [userID, setUserID] = useState<number>(0);

    const {
        register,
        formState: { errors },
    } = useForm<{userID: number, name: string}>();

    useEffect(() => {
        const _userID = Number(localStorage.getItem("userID"));
        if(_userID === 0){
            router.push("/")
        }
        setUserID(_userID)
    }, [])

    return(
        <Box display="flex" justifyContent="center">
            <Box display="flex" justifyContent="center" width="60%" bg="#EEE" padding="5%" marginTop="5%">
                <form action={addPlayer}>    
                    <Box hidden>
                        <Input type="number" {...register('userID')} value={userID}></Input>
                    </Box>
                    <Text fontSize="xl" as="b">追加するプレイヤーの名前を入力してください</Text>
                    <Input
                        width="100%"
                        bg="white"
                        marginTop="2%"
                        autoFocus
                        placeholder="名前"
                        {...register('name')}
                        type="text"
                    ></Input>
                    <Box marginTop="5%">
                        <Button type="submit"  colorPalette="orange" variant="subtle">
                            追加
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}