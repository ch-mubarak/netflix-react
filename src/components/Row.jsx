import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie'



function Row(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.fetchURL).then(response => {
            setMovies(response.data.results)
        })
    }, [props.fetchURL])
    function slideLeft() {
        let slider = document.getElementById("slider"+props.rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    function slideRight() {
        let slider = document.getElementById("slider"+props.rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>{props.title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40} />
                <div id={'slider'+props.rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => {
                        return <Movie
                            key={id}
                            item={item}
                        />
                    })}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40} />
            </div>
        </div>
    )
}

export default Row