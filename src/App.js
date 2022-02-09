import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
    return (
    <>
        <Navbar />
        <h1>React Library 16.8</h1>
        <ul>
            <li>React is one the most popular libraries in JavaScript.</li>
            <li>Knowing React is very hireable skill.</li>
            <li>React is fun to learn.</li>
        </ul>
        <Footer />
    </>
    )
}