"use client"

import React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

function Blog() {

    return (
        <Card className="w-full max-w-7xl space-y-6 mx-auto p-12">
            <p>Blog Image</p>
            <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/sefakpsz.png" />
                    <AvatarFallback className="font-bold text-xl">SF</AvatarFallback>
                </Avatar>
                <div className="flex-col items-center">
                    <p className="font-medium font-sans text-xs">Blogger Name</p>
                    <p className="font-medium font-sans text-xs">Time to Read</p>
                </div>
            </div>
            <CardTitle>Blog Category</CardTitle>
            <CardTitle>Blog Title</CardTitle>
            <CardTitle>Blog Summary</CardTitle>

            Comment Button - Number of Comments
            Like Button
        </Card>
    )
}

export default Blog
