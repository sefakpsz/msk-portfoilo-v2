import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardTitle } from "@/components/ui/card"

export default function Page({ params }: { params: { id: string } }) {

    const blogNumber = parseInt(params.id) === 0 ? 1 : parseInt(params.id) + 1

    return <Card
        className='w-full max-w-7xl space-y-6 m-auto mt-24 p-8'>
        <p>{`Blog number is ${blogNumber}`}</p>
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