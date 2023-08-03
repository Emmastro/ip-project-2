import React from 'react'

function Success() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-all ease-in-out">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="bg-white rounded p-8 z-10 transition-all ease-in-out">
                <div className="bg-[url('../public/check.png')] bg-center bg-no-repeat bg-contain w-8 h-8 mx-auto pb-5"></div>
                Success, message sent!
            </div>
        </div>
    )
}

export default Success