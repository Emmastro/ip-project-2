import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getBlogs } from "../services/api"
import { Link } from "react-router-dom"

export const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
    return formattedDate
}

function Blog() {

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

    const pictures = [
        "../images/learning.jpeg",
        "../images/writing.jpeg",
        "../images/working.jpeg",
        "../images/presentation.jpeg",
        "../images/designing.jpeg",
        "../images/data.jpeg",
    ]

    return (
        <>
            <Navbar />

            <div className="w-11/12 md:w-3/4 mx-auto flex flex-col items-center">
                <h1 className="text-xl font-medium py-6">The Blog</h1>
                <h1 className="text-2xl md:text-4xl font-bold mb-2">Writings from our team</h1>
                <h2 className="text-sm md:text-base text-center font-semibold mb-4">Latest job news, industry search, technologies and job trends.</h2>
                <div className="w-full h-[70vh] bg-[url('../public/images/img1.jpeg')] bg-cover bg-no-repeat bg-center mb-12">
                    <div className="w-full h-full bg-black bg-opacity-50 flex items-end pl-4 md:pl-8 pb-12">
                        <h2 className="text-white">
                            Deborah, 12th July 2023 <br />
                            Job Search <br />
                            How do you get jobs that match your skills and career? <br /> <br />
                            Coming soon ...
                        </h2>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {blogs?.map((blog, index) => (
                        <Link
                            to={`/blog/${blog.id}`}
                            style={{ textDecoration: 'none' }}
                            key={blog.id}
                        >
                            <div className="p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out h-full">
                                <img src={pictures[index]} width={500} height={500} />
                                <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">{blog.author} - { formatDate((blog.created_at).slice(0, 10))}</h1>
                                <h2 className="text-sm font-semibold pt-2">{blog.title}</h2>
                                <h3 className="font-normal text-zinc-700 line-clamp-3 pt-2 text-base">{(blog.content).slice(14)}</h3>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Blog