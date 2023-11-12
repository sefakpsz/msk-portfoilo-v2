import Blog from '@/components/section/Blog'

export default function Home() {

    // FIXME: create here a data set and use it in below
    /*
    const data = [
    {
        title: 'Blog Title',
        category: 'Blog Category',
        summmary: 'Blog Summary'
    }
    // more...
]

data.map((item, index) => (
    <Blog key="index" {index, ...item} />
)

    */

    return (
        <main className="grid grid-cols-4 gap-4 p-32 w-full">
            {[...new Array(10)].map((item, index) => (

                <Blog
                    key={index}
                    title='Blog Title'
                    imgSrc="https://images.unsplash.com/photo-1594568284297-7c64464062b1?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    category='Blog Category'
                    summary='Blog Summary'
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
