import React from 'react';
import { FiGithub } from "react-icons/fi";

export default function Navbar(){
    return(
        <footer>
            <div>React Web application made by Anas Saoui &#9;</div>
            <div className ="Github-icon">
                <FiGithub />
            </div>
            <span>Anas-debug</span>
            <div>&copy; Creative commons liscence</div>
        </footer>
    )
}

