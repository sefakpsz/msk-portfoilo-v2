import Blog from '@/components/section/Blog'

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-between p-24 w-[%60]">
            {
                [...new Array(5)].map((item, index) => {
                    if (index === 0) {
                        return <Blog key={index} title='Blog Title' image='Blog image' category='Blog Category' summary='Blog Summary'
                            className='w-full h-[600px]' />
                    }
                    return <Blog key={index} title='Blog Title' image='Blog image' category='Blog Category' summary='Blog Summary' className='' />
                })
            }
        </main>
    )
}
