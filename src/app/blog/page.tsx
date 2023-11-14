import Blog from '@/components/section/Blog'
import { blogDatas } from './blogDatas'

export default function Home() {
    return (
        <main className="grid grid-cols-4 gap-4 p-32 w-full">
            {blogDatas.map((item, index) => (

                <Blog
                    key={index}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    category={item.category}
                    summary={item.summary}
                    index={index}
                    className=
                    {`${index !== 0 ?
                        'col-span-1 row-span-1 h-[290px] text-[8px]' :
                        'col-span-2 row-span-2 h-[600px]'}`
                    }
                />
            ))}
        </main>
    )
}
