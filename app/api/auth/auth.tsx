"use client"
import { createUser, searchUser } from "@/lib/action";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";


/**User情報関連 */
//Userを検索
export const login = async (username: string, password: string) => {
    //名前からuserを検索
    const user = await searchUser(username);
    //userのパスワードとフォームのパスワードが等しければログイン
    if(user && user.password === password){
        localStorage.setItem("userID", JSON.stringify(user.id));
        return true;
    }
    return false;
    
}
//Userを作成
export const signup = async (formData: FormData) => {
    //formDataから入力された名前・パスワードを取り出す
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    //名前とパスワードが入力されていたらuser情報を新規作成
    if(username && password){
        await createUser(username, password);
        redirect("/login")
    }
}