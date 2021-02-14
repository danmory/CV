import React from 'react'
import './Contacts.sass'
import telegram from '../../assets/telegram.png'
import vk from '../../assets/vk.png'
import github from '../../assets/github.png'
import gitlab from '../../assets/gitlab.png'


export default function Contacts(){

    const contactsUrl = [telegram, vk, github, gitlab]
    const links = ['https://t.me/danmory', 'https://www.vk.com/babydanila', 'https://github.com/danmory', 'https://gitlab.com/danmory']

    return (
        <div className="contacts">
            <p>Contact me:</p>
            <ul>
                {contactsUrl.map((item, idx) =>
                    <li>
                        <a href={links[idx]} target='_blank'>
                            <img src={item} alt='logo'/>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}