import Blog from '@/components/section/Blog'

export default function Home() {
    return (
        <main className="grid grid-cols-4 gap-4 p-32 w-full">
            {[...new Array(6)].map((item, index) => (

                <Blog
                    key={index}
                    title='Blog Title'
                    image='Blog image'
                    category='Blog Category'
                    summary='Blog Summary'
                    className={`${index !== 0 ? 'col-span-1 row-span-1 h-[290px]' : 'col-span-2 row-span-2 h-[600px]'}`}
                />
            ))}
        </main>
    )
}
