import React from 'react';
import './contact.css'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className='contact-content'>
                    <div className='contact-title'>
                        Contact me
                    </div>
                    <div className='contact-info'>
                        wudavidh@mit.edu
                    </div>
                </div>
                <div className='contact-content'>
                    <div className='contact-title'>
                        Github
                    </div>
                    <div className='contact-info'>
                        <a className='contact-info' href='https://github.com/david-wu-dev/'>
                            https://github.com/david-wu-dev
                        </a>
                    </div>
                </div>
                <div className='contact-content'>
                    <div className='contact-title'>
                        Projects
                    </div>
                    <div >
                        <a className='contact-info' href="/~wudavidh/#/projects/mnist-gan">
                            Generative Adversarial Networks
                        </a>
                    </div>
                    <div>
                        <a className='contact-info' href="/~wudavidh/#/projects/stock-rl">
                            Deep Reinforcement Learning
                        </a>
                    </div>
                </div>
                <div className='contact-content'>
                    <div className='contact-title'>
                        Last updated
                    </div>
                    <div className='contact-info'>
                        January 30, 2020
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact