import React, {useState} from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import './App.sass'

export default function App(){
    let [mainBlockIdx, setMainBlock] = useState(0)
    const blocks = ['about_me', 'skills', 'my_works']

    return (
        <React.Fragment>
            <div className="container">
                <Header handler={setMainBlock} blocks={blocks}/>
            </div>
            <div className="container">
                <Main name={blocks[mainBlockIdx]}/>
            </div>
            <div className="container">
                <Footer />
            </div>
        </React.Fragment>
    )
}