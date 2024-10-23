import Image from "next/image";

export const metadata = {
    title: 'Page Not Found',
}

export default function NotFound() {
    return (
        <div className="px-2 w-full">
            <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
                <h2 className="text-2xl">Page Not Found</h2>
                <Image
                    src="/images/404.png"
                    alt="404"
                    width={400}
                    height={400}
                    sizes="300px"
                    priority={true}
                    title='Page Not Found'
                    className="m-0 rounded-xl" />
            </div>
        </div>
    )
}