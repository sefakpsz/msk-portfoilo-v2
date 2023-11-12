"use client"

import React from "react"
import {
    Card,
    CardTitle,
} from "../../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import { twMerge } from "tailwind-merge"
import { BlogProps } from "./types"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Blog: React.FC<BlogProps> = ({ className, imgSrc, category, title, summary, index }) => {

    const router = useRouter()

    return (
        <Card
            onClick={() => router.push(`blog/${index}`)}
            className={twMerge('w-full max-w-7xl space-y-4 p-6 hover:cursor-pointer hover:bg-slate-50 overflow-hidden', className)}>
            <Image
                src={imgSrc}
                width={`${index !== 0 ? 200 : 500}`}
                height={`${index !== 0 ? 100 : 250}`}
                className="mx-auto rounded-md"
                alt="Picture of the blog"
            />

            <div className="space-y-4 px-4">
                <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/sefakpsz.png" />
                        <AvatarFallback className="font-bold text-xl">SF</AvatarFallback>
                    </Avatar>
                    <div className="flex-col items-center">
                        <p className="font-medium font-sans text-xs">Muhammet Sefa Kapısız</p>
                    </div>
                </div>
                {/* FIXME: insted of js expression (if else) to "first:" and grid (you can use grid generator for it) */}
                <div className={`${index !== 0 ?
                    'space-y-2' :
                    'space-y-8'}`
                }>
                    <CardTitle>{category}</CardTitle>
                    <CardTitle>{title}</CardTitle>
                    <CardTitle>{summary}</CardTitle>
                </div>
            </div>

            {/* <Button>Comment</Button>

<p>Number of Comments - {numberOfComment}</p>

<Button>Like</Button> */}
        </Card>
    )
}

export default Blog
