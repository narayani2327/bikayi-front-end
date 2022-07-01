import React, { Component } from 'react'
import logo from './logo.png'
export default class BackGround extends Component {
    render() {
        return (
            <div className='background'>
                <img src={logo} alt='Logo of Nobel'></img>
                <div className='descriptive'>
                    <h2>Welcome</h2>
                    <p>This website is created in Honour of Nobel Laureates.</p>
                </div>
            </div>
        )
    }
}
