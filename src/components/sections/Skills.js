import React from 'react'

export default function Skills(){

    const skills = [
        ['HTML', 9],
        ['CSS', 7],
        ['JavaScript', 7],
        ['ReactJS', 6],
        ['NodeJS', 5],
        ['Linux', 5],
        ['Git', 6],
        ['Algorithms and Data Structures', 7],
        ['Databases', 5],
        ['Computer Architecture, Operating Systems, Networks', 7],
    ]

    return (
        <React.Fragment>
            <ul className='skills-list'>
                {skills.map(value =>
                    <li className='skill'>
                        <p className='skill-desc'>{value[0]}</p>
                        <div className={'div-' + value[1]} >{value[1]*10}%</div>
                    </li>)
                }
            </ul>
        </React.Fragment>
    )
}