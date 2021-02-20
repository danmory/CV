import React from 'react'
import Slider from '../slider/Slider'
import snake from '../../assets/snake.png'
import ode from '../../assets/ode.png'
import shop from '../../assets/shop.png'
import siteConstructor from '../../assets/site_constructor.png'
import landing from '../../assets/landing.jpg'
import colorTree from '../../assets/color_tree.png'






export default function MyWorks(){

    const works = [
        {label: 'snake game', img: snake},
        {label: 'site constructor', img: siteConstructor},
        {label: 'landing', img: landing},
        {label: 'online shop', img: shop},
        {label: 'numerical solution for ODE', img: ode},
        {label: 'color tree', img: colorTree},
    ]

    return (
        <React.Fragment>
            <Slider items={works}/>
        </React.Fragment>
    )
}