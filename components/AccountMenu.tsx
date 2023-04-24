import React from "react";
import {signOut} from 'next-auth/react';
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps{
    visible: boolean;
}
const AccountMenu:React.FC<AccountMenuProps>  = ({visible}) => {
    const {data: currentUser} = useCurrentUser();
    if(!visible){
        return null;
    }
    return (
    <div className="bg-black w-56 absolute top-20  right-10 py-5 flex-col border-2 border-gray-800 flex">
        <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                <img className="rounded-md w-8" src="/images/default-blue.png" alt="" />
                <p className="text-white text-sm group-hover/item:underline">
                    {currentUser?.name}
                </p>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div onClick={()=>signOut()} className="text-white px-3 text-center text-sm hover:underline">
                Sign out of Netflix
            </div>
        </div>
    </div>
  )
}

export default AccountMenu;
