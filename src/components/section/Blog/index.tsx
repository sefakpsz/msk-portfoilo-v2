"use client"

import React from "react"
import {
    Card,
    CardTitle,
} from "../../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import { twMerge } from "tailwind-merge"
import { BlogProps } from "./types"


const Blog: React.FC<BlogProps> = ({ className, image, category, title, summary }) => {

    return (
        <Card className={twMerge('w-full max-w-7xl space-y-6 mx-auto p-12 m-2', className)}>
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
    )
}

export default Blog
