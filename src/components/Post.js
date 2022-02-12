import React from 'react';


export default function Post(title, content){
    return(
        <article>
            <h1>{title}</h1>
            <p>{content}</p>
        </article>
    )
}