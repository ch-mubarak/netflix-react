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
    }, [])

    return (
        <div>
            <h2 className='text-white font-bold md:text-xl p-4'>{props.title}</h2>
            <div className='relative flex items-center group'>
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => {
                        return <Movie
                            key={id}
                            item={item}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Row