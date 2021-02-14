import React from 'react'

export default function Skills(){

    const skills = [
        ['JavaScript', 8],
        ['ReactJS', 6],
        ['HTML', 9],
        ['CSS', 7],
        ['NodeJS', 4],
        ['Git', 6],
        ['Algorithms and Data Structures', 7],
        ['Databases', 4],
        ['Computer Architecture, Operating Systems, Networks', 7],
        ['Linux', 5],
        ['Math', 6]
    ]

    return (
        <React.Fragment>
            <ul className='skills-list'>
                {skills.map(value =>
                    <li>
                        <span>{value[0]}:</span><br /><div className={'div-' + value[1]}>{value[1]}/10</div>
                    </li>)
                }
            </ul>
        </React.Fragment>
    )
}