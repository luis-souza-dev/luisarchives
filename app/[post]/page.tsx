import Clickable from '@/components/clickable'
import Image from 'next/image'

export default function PostDetail() {
    const test = async () => {
        const a = await new Promise((res, rej) => {
            res('a');
            rej('b');
        });
        console.log('ffunciona')
    }
  return (
    <div className='px-5 h-full flex flex-wrap pt-10 pb-4'>
        <header className='w-full h-[10%] flex gap-x-2 text-4xl text-white items-center'>
            <Clickable click={() => {console.log('deu bom')}}>
                <span className='hover:cursor-pointer hover:text-blue-600'>../</span>
            </Clickable>
            <span>
                Lorem ipsum dolor sit amet
            </span>
        </header>
        <div className='w-full h-[90%]'>
            a
        </div>
    </div>
  )
}
