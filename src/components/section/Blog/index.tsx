"use client"

import React from "react"
import {
    Card,
    CardTitle,
} from "../../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import { twMerge } from "tailwind-merge"
import { BlogProps } from "./types"
import Link from "next/link"

const Blog: React.FC<BlogProps> = ({ className, image, category, title, summary }) => {

    return (
        <Link href="/">
            <Card className={twMerge('w-full max-w-7xl space-y-6 mx-auto p-8 m-[1px] hover:cursor-pointer hover:bg-slate-50', className)}>
                <p>{image}</p>
                <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/sefakpsz.png" />
                        <AvatarFallback className="font-bold text-xl">SF</AvatarFallback>
                    </Avatar>
                    <div className="flex-col items-center">
                        <p className="font-medium font-sans text-xs">Muhammet Sefa Kapısız</p>
                    </div>
                </div>
                <CardTitle>{category}</CardTitle>
                <CardTitle>{title}</CardTitle>
                <CardTitle>{summary}</CardTitle>

                {/* <Button>Comment</Button>

<p>Number of Comments - {numberOfComment}</p>

<Button>Like</Button> */}
            </Card>
        </Link>
    )
}

export default Blog
