import React from 'react'
import 'ldrs/helix'
function WebsiteLoader(){
    return(
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-black">
            <l-helix size="60" color="white"></l-helix>
            <div className="text-white text">Loading Portfolio...</div>
        </div>
    )
}

export default WebsiteLoader;