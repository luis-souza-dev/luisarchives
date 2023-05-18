import Link from "next/link";
import Tag from "./tags";

export default function Post({
  title,
  description,
  date,
  tags,
  id,
}: {
  title: string,
  description: string,
  date: string,
  tags: string[],
  id: string
}) {

    const parsedDate = new Date(date).toDateString();
    return (
        <>
            <Link href={`/${id}`} prefetch={false} className="transition ease-in-out hover:-translate-y-[0.15rem] grid grid-rows-6 grid-cols-12 w-4/5 h-40 m-auto border border-solid rounded-md bg-slate-800 border-gray-600 text-white hover:text-blue-500 hover:cursor-pointer py-2">
                <div className="row-span-1 col-span-12 px-4 text-2xl">
                    <span className="pr-2"> {title} </span>
                    {tags.map((tag,index) => (
                        <Tag key={tag + index} text={tag} />
                    ))}
                </div>
                <div className="row-span-3 col-span-12 pt-3 px-4 overflow-hidden text-ellipsis">
                    {description}
                </div>
                <div className="row-span-1 row-start-6 col-span-2 col-start-11 text-end pr-4">
                    {parsedDate}
                </div>
            </Link>
        
        </>
    )
}
