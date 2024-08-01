import React from 'react'
const DEFAULT_PLACEHOLDER_IMAGE =
    "https://media3.giphy.com/media/VYo5VxztwOwtHoKUl5/giphy.gif?cid=ecf05e47tfvfg99pe8rydo8g6eo9b7hvopehbyf77g3avyww&ep=v1_stickers_search&rid=giphy.gif&ct=s";

function Movie({ movie }) {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <div className='Movie flex flex-col items-center justify-center md:w-[20%] w-[40%] h-full m-6 gap-3 cursor-default hover:translate-y-10 hover:duration-700'>
            <h2 className='font-semibold h-10 text-[#DCD7C9]'>{movie.Title}</h2>
        <div className='Movie flex flex-col items-center justify-center md:w-[30%] w-[40%] lg:w-[20%] h-full m-6 gap-3 cursor-default hover:scale-[1.03] hover:duration-300 sm:p-5'>
            <h2 className='font-semibold h-10 text-xl text-[#A27B5C] text-center'>{movie.Title}</h2>
                <img className='border-4 border-[#DCD7C9] rounded-xl h-72'
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            <p className='text-xl text-[#DCD7C9]'>({movie.Year})</p>
            <p className='text-xl text-[#6e695a]'>({movie.Year})</p>
        </div>
    )
}

export default Movie
