import React from 'react'

import '../styles/Header.css'

export default function Header(props) {

    return (
        <header className='todo--header'>
            <h1 className='title'>{props.title}</h1>
            <h6 className='subtitle'>{props.subTitle}</h6>
        </header>
    )
}

Header.defaultProps = {
    title: "To-Do App",
    subTitle: "Manage all your tasks here"
}