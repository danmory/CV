import React from 'react'
import './Contacts.sass'
import telegram from '../../assets/telegram.png'
import vk from '../../assets/vk.png'
import github from '../../assets/github.png'
import gitlab from '../../assets/gitlab.png'


export default function Contacts(){

    const links = [
        [telegram, 'https://t.me/danmory'],
        [vk, 'https://www.vk.com/babydanila'],
        [github, 'https://github.com/danmory'],
        [gitlab, 'https://gitlab.com/danmory']
    ]

    return (
        <div className="contacts">
            <p>Contact_me:</p>
            <ul>
                {links.map(item =>
                    <li>
                        <a href={item[1]} target='_blank' className='contact'>
                            <img src={item[0]} alt='logo'/>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}