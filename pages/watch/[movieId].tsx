import React from 'react'
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useMovie from '@/hooks/useMovie';

const Watch = () => {

    const router = useRouter();
    const { movieId } = router.query;
    const { data } = useMovie(movieId as string);

    return (
        <div>
            <nav className='
        fixed
        w-full
        p-4
        z-10
        flex
        flex-row
        items-center
        gap-8
        bg-black
        bg-opacity-70    
    '>
                <AiOutlineArrowLeft  
                    onClick={()=>router.push('/')} 
                    className='text-white cursor-pointer' 
                    size={40} 
                />
                <p className='text-white text-xl lg:text-3xl font-bold'>
                    <span className='font-light'>Watching:</span>
                    {data?.title}
                </p>
            </nav>
            <video  
            autoPlay
            controls
            src={data?.videoUrl} 
            className='h-full w-full'></video>
        </div>

    )
}

export default Watch;