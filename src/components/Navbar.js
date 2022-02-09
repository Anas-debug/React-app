import React from 'react';
import { AiFillCode } from 'react-icons/ai';
export default function Navbar() {
    return(
        <nav class ="navbar">
            <div class = "icon"></div>
            <AiFillCode className='top-icon' />
            <ul class= "nav-list">
                <li class= "list-el">Home</li>
                <li class= "list-el">Pricing</li>
                <li class= "list-el">Contact</li>
            </ul>
        </nav>
    )
}