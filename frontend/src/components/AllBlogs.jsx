import React, { useEffect, useState } from 'react'
import { getBlogs } from '../services/api'
import { Link } from "react-router-dom"

export const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
    return formattedDate
}

const pictures = [
    "../images/learning.jpeg",
    "../images/writing.jpeg",
    "../images/working.jpeg",
    "../images/presentation.jpeg",
    "../images/designing.jpeg",
    "../images/data.jpeg",
]

function AllBlogs() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getBlogs()
            .then((response) => {
                setBlogs(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            {blogs?.map((blog, index) => (
                <Link
                    to={`/blog/${blog.id}`}
                    style={{ textDecoration: 'none' }}
                    key={blog.id}
                >
                    <div className="p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
                        <img src={pictures[index]} width={500} height={500} />
                        <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">{blog.author} - {formatDate((blog.created_at).slice(0, 10))}</h1>
                        <h2 className="text-sm font-semibold pt-2">{blog.title}</h2>
                        <h3 className="font-normal text-zinc-700 line-clamp-3 pt-2 text-base">{(blog.content).slice(14)}</h3>
                    </div>
                </Link>

            ))}
        </div>
    )
}

export default AllBlogs