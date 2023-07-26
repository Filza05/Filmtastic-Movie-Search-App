import React from 'react'
const DEFAULT_PLACEHOLDER_IMAGE =
    "https://media3.giphy.com/media/VYo5VxztwOwtHoKUl5/giphy.gif?cid=ecf05e47tfvfg99pe8rydo8g6eo9b7hvopehbyf77g3avyww&ep=v1_stickers_search&rid=giphy.gif&ct=s";

function Movie({ movie }) {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <div className='Movie flex flex-col items-center justify-center md:w-[20%] w-[40%] h-full m-6 gap-3 cursor-default hover:translate-y-10 hover:duration-700'>
            <h2 className='font-semibold h-10 text-[#DCD7C9]'>{movie.Title}</h2>
                <img className='border-4 border-[#DCD7C9] rounded-xl h-72'
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            <p className='text-xl text-[#DCD7C9]'>({movie.Year})</p>
        </div>
    )
}

export default Movie