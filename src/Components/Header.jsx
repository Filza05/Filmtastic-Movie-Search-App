import React from 'react'

function Header() {
    return (
<<<<<<< HEAD
        <header className='w-screen h-[125px] shadow-lg shadow-[#DCD7C9] flex justify-center bg-[#2C3639] cursor-default'>
            <div className='flex gap-2 items-center p-10 rounded-lg border-4 border-[#A27B5C] mb-4 mt-4'>
                <div>
                    <h1 className='text-4xl font-extrabold text-[#A27B5C]'>Film-Tastic!!!</h1>
                    <p className='text-[#DCD7C9] text-lg font-semibold'>Search Up Your Favs :)</p>
=======
        <header className='w-full h-[125px] shadow-lg shadow-[#DCD7C9] flex justify-center cursor-default'>
            <div className='flex gap-2 items-center p-10 rounded-lg border-4 border-[#A27B5C] mb-4 mt-4'>
                <div>
                    <h1 className='text-4xl font-extrabold text-[#A27B5C]'>Film-Tastic!!!</h1>
                    <p className='text-[#6e695a] text-lg font-semibold'>Search Up Your Favs :)</p>
>>>>>>> 253c529 (Few changes)
                </div>
                <div>
                    <img src='https://media.giphy.com/media/HSzEKkRNHUQQrmVA5V/giphy.gif'
                        className='w-24 h-32'
                    />
                </div>
            </div>

        </header>
    )
}

export default Header