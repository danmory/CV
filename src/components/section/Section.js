import React from 'react'
import AboutMe from '../sections/AboutMe'
import Skills from '../sections/Skills'
import MyWorks from '../sections/MyWorks'
import './Section.sass'

export default function Section(props){
    switch (props.name){
        case('about_me'):
            return <section className={props.name}><AboutMe/></section>
        case('skills'):
            return <section className={props.name}><Skills/></section>
        case('my_works'):
            return <section className={props.name}><MyWorks/></section>
    }
}