import React from 'react'
import './Navbar.sass'

export default function Navbar(props){

    const handler = props.handler

    const blocks = props.blocks

    return (
        <nav>
            <ul>
                {blocks.map((item, idx) =>
                    <li>
                    <button type='button'
                            onClick={() => handler(idx)}
                    >{item}</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}
