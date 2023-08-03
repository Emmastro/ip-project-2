import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBlog, getBlogs } from '../services/api'
import { formatDate } from './Blog'
import BlogContent from '../components/BlogContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Read() {

    const [blog, setBlog] = useState()
    const [blogs, setBlogs] = useState()

    const params = useParams()
    let blogId = params.id

    useEffect(() => {
        getBlog(blogId)
            .then((response) => {
                setBlog(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [blogId])

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
            <div className='flex flex-col md:flex-row w-11/12 py-12 mx-auto'>

                <div className=" w-full md:w-1/5 border-zinc-300 md:mr-12 md:h-[200vh] text-sm mt-24 md:mt-8 order-1 md:order-first">
                    <div className='md:sticky md:top-5'>
                        <h1 className='font-bold text-base pb-3'>Upcoming</h1>
                        <h2 className='text-zinc-700 py-1 md:pr-3'>Navigating the Changing Landscape: Future-Proofing Your Career</h2>
                        <h2 className='text-zinc-700 py-1 md:pr-3'>Unlocking the Power of Soft Skills: Your Secret to Career Success</h2>
                        <h2 className='text-zinc-700 py-1 md:pr-3'>Remote Work Revolution: Embracing the New Normal in Job Opportunities</h2>
                        <h2 className='text-zinc-700 py-1 md:pr-3'>From Passion to Paycheck: Turning Your Hobby into a Fulfilling Career</h2>
                        <h2 className='text-zinc-700 py-1 md:pr-3'>The Rise of Gig Economy: Thriving in the World of Freelancing</h2>
                        <h2 className='text-zinc-700 py-1 md:pr-3'>Climbing the Corporate Ladder: Strategies for Advancing Your Career</h2>
                        <h2 className='text-zinc-700 py-1 md:pr-3'>Job Hunting 2.0: Mastering the Art of Landing Your Dream Job in the Digital Age</h2>
                    </div>
                </div>

                <div className='md:w-1/2 md:pr-8'>
                    <h1 className='font-bold text-3xl mb-4'>{blog?.title}</h1>
                    <h2 className='text-zinc-600 mb-1'>{blog?.author} - {blog ? formatDate(blog.created_at.slice(0, 10)) : null}</h2>
                    <img src={pictures[blogId - 1]} width={'100%'} />
                    <BlogContent blog={blog} />
                </div>

                <div className='md:w-1/4 md:ml-5 mt-8 md:h-[200vh] order-last'>
                    <div className='md:sticky md:top-5'>
                        <h1 className='font-bold text-base pb-3'>Blogs</h1>
                        {blogs?.map((blog, index) => (
                            <Link
                                to={`/blog/${blog.id}`}
                                style={{ textDecoration: 'none' }}
                                key={blog.id}
                            >
                                <h2 className="text-sm font-semibold text-zinc-700 hover:underline pt-2 underline ">{blog.title}</h2>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default Read