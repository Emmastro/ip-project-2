import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Image from "next/image"

function Blog() {
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
                            How do you get jobs that match your skills and career?
                        </h2>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
                        <img src="../images/learning.jpeg" width={500} height={500} />
                        <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">Benson Mugure, 20 July 2023</h1>
                        <h2 className="text-sm font-semibold">Learning</h2>
                        <p className="font-light">Various ways of learning to achive desired skills</p>
                    </div>
                    <div className="p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
                        <img src="../images/writing.jpeg" width={500} height={500} />
                        <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">Emmanuel Murairi, 24 July 2023</h1>
                        <h2 className="text-sm font-semibold">Writing</h2>
                        <p className="font-light">How to write an effective blog</p>
                    </div>
                    <div className="p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
                        <img src="../images/working.jpeg" width={500} height={500} />
                        <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">Josephine Ekhator, 27 July 2023</h1>
                        <h2 className="text-sm font-semibold">Working in IT industry</h2>
                        <p className="font-light">How to work effectively and survive in the IT sector</p>
                    </div>
                    <div className="p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
                        <img src="../images/presentation.jpeg" width={500} height={500} />
                        <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">Justus Chemirmir, 29 July 2023</h1>
                        <h2 className="text-sm font-semibold">Presentations</h2>
                        <p className="font-light">Doing best presentations at workplaces to impress</p>
                    </div>
                    <div className="p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
                        <img src="../images/designing.jpeg" width={500} height={500} />
                        <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">Deborah Paintsil, 30 July 2023</h1>
                        <h2 className="text-sm font-semibold">UX Designer</h2>
                        <p className="font-light">Creating impressive designs for your clients</p>
                    </div>
                    <div className="p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
                        <img src="../images/data.jpeg" width={500} height={500} />
                        <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">Mussie Teferi, 31 July 2023</h1>
                        <h2 className="text-sm font-semibold">Data</h2>
                        <p className="font-light">Working with data in the IT sector</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Blog