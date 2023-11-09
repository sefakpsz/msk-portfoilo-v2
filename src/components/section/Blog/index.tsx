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

const Blog: React.FC<BlogProps> = ({ className, imgSrc, imgH, imgW, category, title, summary, index }) => {

    const router = useRouter()

    return (
        <Card
            onClick={() => router.push(`blog/${index}`)}
            className={twMerge('w-full max-w-7xl space-y-4 p-8 hover:cursor-pointer hover:bg-slate-50 overflow-hidden', className)}>
            <div className={`rounded-md w-max h-max overflow-hidden`}>
                <Image
                    src={imgSrc}
                    width={`${index !== 0 ? 200 : 400}`}
                    height={`${index !== 0 ? 100 : 200}`}
                    alt="Picture of the blog"
                />
            </div>
            <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/sefakpsz.png" />
                    <AvatarFallback className="font-bold text-xl">SF</AvatarFallback>
                </Avatar>
                <div className="flex-col items-center">
                    <p className="font-medium font-sans text-xs">Muhammet Sefa Kapısız</p>
                </div>
            </div>

            <div className={`${index !== 0 ?
                'space-y-2' :
                'space-y-8'}`
            }>
                <CardTitle>{category}</CardTitle>
                <CardTitle>{title}</CardTitle>
                <CardTitle>{summary}</CardTitle>
            </div>

            {/* <Button>Comment</Button>

<p>Number of Comments - {numberOfComment}</p>

<Button>Like</Button> */}
        </Card>
    )
}

export default Blog
