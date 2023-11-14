import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { blogDatas } from "../blogDatas"

export default function Page({ params }: { params: { id: string } }) {
    console.log(params.id)
    const blogData = blogDatas.filter(b => b.id === parseInt(params.id))[0]

    return <Card
        className='w-full max-w-7xl space-y-6 m-auto mt-24 p-8'>
        <div className="rounded-md max-h-[500px] max-w-[1000px] m-auto overflow-hidden flex justify-center items-center">
            <Image
                src={blogData.imgSrc}
                width={1000}
                height={500}
                alt={blogData.title}
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
        <CardTitle>{blogData.title}</CardTitle>
        <CardTitle>{blogData.category}</CardTitle>
        <CardTitle>{blogData.summary}</CardTitle>

        {/* <Button>Comment</Button>

<p>Number of Comments - {numberOfComment}</p>

<Button>Like</Button> */}
    </Card>
}

//Folder Based Route Structure