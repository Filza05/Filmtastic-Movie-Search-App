import React, { useState } from 'react'

function Search(props) {
const [searchVal,setSearchVal] = useState('');

function handleChange (e) {
    setSearchVal(e.target.value);
}

function resetInput () {
    setSearchVal('');
}

function handleMovieSearch (e) {
    e.preventDefault();
    props.forSearch(searchVal);
    resetInput();
}

    return (
        <div className=' mt-14 p-10'>
            <form className='flex justify-center sm:justify-start gap-5'>
                <input className='w-[300px] h-11 sm:w-[400px] rounded-md font-semibold p-4 focus:bg-[#2C3639] focus:duration-700 text-xl text-[#DCD7C9]'
                    type='text' placeholder='Search for movies' value={searchVal} onChange={handleChange} >
                </input>

                <button className='flex gap-1 items-center border-b-4 border-[#3F4E4F] hover:border-[#A27B5C] pr-3 group hover:duration-700 hover:translate-x-4'
                 type="submit" value="SEARCH" onClick={handleMovieSearch}>
                    <svg class="h-8 w-8 text-[#A27B5C] group-hover:translate-x-1 hover:duration-700" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="13 17 18 12 13 7" />
                        <polyline points="6 17 11 12 6 7" />
                    </svg>
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search