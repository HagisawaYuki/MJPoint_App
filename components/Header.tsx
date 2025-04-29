"use client"
import { Box, Link, Button, Text } from "@chakra-ui/react";


const afterLoginHeaderURLs = [
    {name: "ホーム", href: "/home"},
    {name: "新規作成", href: "/create"},
    {name: "ログイン", href: "/login"},
    {name: "サインアップ", href: "/signup"},
];

// const beforeLoginHeaderURLs = [
//     {name: "ログイン", href: "/login"},
//     {name: "サインアップ", href: "/signup"},
// ];

const Header = () => {
    
    return (
        <Box width="100%" bg="#EEE" display="flex" justifyContent="center" alignItems="center" paddingBottom="3%" borderBottom="1px" borderBottomColor="#CCC" borderRadius="0">
            <Box display="flex">
                {afterLoginHeaderURLs.map((item => 
                <Box key={item.name} style={{paddingRight: "0%"}}>
                    <Button variant="ghost" paddingTop="4vh">
                        <Link href={item.href}>
                            <Text as="b" fontSize="2xl">{item.name}</Text>
                        </Link>
                    </Button>
                </Box>))}
                
            </Box>
        </Box>
    );
};

export default Header;