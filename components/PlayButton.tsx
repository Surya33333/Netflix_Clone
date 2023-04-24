import React from "react";

import { BsPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps{
    movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({movieId}) => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(`/watch/${movieId}`)} 
            className="
            bg-white
            rounded-md
            py-1 md:py-2
            px-2 md:px-4
            w-auto
            text-sx lg:text-lg
            font-semiold
            flex
            flex-row
            items-center
            hover:bg-neutral-300
            transition
        ">
            <BsPlayFill size={25} className="mr-1 "/>
            Play 
        </button>
    )
}

export default PlayButton;

