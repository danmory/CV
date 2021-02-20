import React from 'react'
import photo from '../../assets/danila.jpg'

export default function AboutMe(){

    const bio = [
        'Студент университета Иннополиса.',
        'Frontend разработчик, понимающий и в случае необходимости способный написать серверную часть приложения.',
        'Понимаю, как используемые мною технологии работают "под капотом".',
        'Имеется знание компьютерных наук: алгоритмы и структуры данных, компьютерные сети, операционные системы.',
        'Владею разговорным английским, способен читать документации на иностранном языке.',
        'Коммуникабельный, умею работать в команде.'
    ]

    return (
        <React.Fragment>
            <div className='photo-block'>
                <img src={photo} className='photo' alt='My photo'/>
            </div>
            <div className='bio-block'>
                <ul className='bio'>
                    {bio.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </React.Fragment>
    )
}