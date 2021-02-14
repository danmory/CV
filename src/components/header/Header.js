import React from 'react'
import './Header.sass'
import Navbar from '../navbar/Navbar'


export default function Header(props){
    return (
        <header>
            <Navbar handler={props.handler} blocks={props.blocks}/>
        </header>
    )
}