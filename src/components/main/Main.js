import React from 'react'
import './Main.sass'
import Section from '../section/Section'

export default function Main(props){
    return (
        <main>
            <Section name={props.name}/>
        </main>
    )
}