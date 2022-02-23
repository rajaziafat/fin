import React from 'react'
import Navbar from './Components/navbar'
import BlogSection from './Components/blog'
import TableSection from './Components/table'
import Footer from './Components/footer'

function App() {
    return (
        <div>
            <Navbar/>
            <div className="bg-[#1A202C] pb-28 mt-20">
            <BlogSection/>
            <TableSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
