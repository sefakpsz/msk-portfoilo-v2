import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Page({ params }: { params: { id: string } }) {

    return <Card
        className='w-full max-w-7xl space-y-6 m-auto mt-24 p-8'>
        <div className="rounded-md max-h-[250px] max-w-[500px] overflow-hidden flex justify-center items-center">
            <Image
                src="https://images.unsplash.com/photo-1594568284297-7c64464062b1?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={250}
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
        <CardTitle>{'category'}</CardTitle>
        <CardTitle>{'title'}</CardTitle>
        <CardTitle>{'summary'}</CardTitle>

        {/* <Button>Comment</Button>

<p>Number of Comments - {numberOfComment}</p>

<Button>Like</Button> */}
    </Card>
}

//Folder Based Route Structure