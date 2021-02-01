import React from 'react';
import david from './david.jpg';
import './about.css';


class About extends React.Component {
    constructor(props) {
        super(props)
        this.about = React.createRef()
    }

    render() {
        return (   
            <div className='about' id='about'>
                <div className='about-content'>
                    <div className='about-container'>
                        <div className='about-title'>
                            About me
                        </div>
                        <p className='about-text'>
                            I am currently a second-year student studying computer science at MIT. 
                            Prior to computer science, I developed an extensive background and affinity
                            for chemistry; the natural sciences, especially physics, still interest me. 
                            Since enrolling at MIT, I have additionally been fascinated with economics 
                            and many of the problems regarding effective investing. The field that excites
                            me most is applied machine learning and I see lots of potential in the future 
                            for the field of machine learning/AI to completely revolutionize the way 
                            we solve problems in virtually all other fields of study. This is where I hope
                            to make contributions one day.
                        </p>
                        <p className='about-text'>
                            Outside of academics, some of my hobbies include running 
                            and playing tennis. One of my goals for running is to one
                            day run the Cambridge half marathon in under 2 hours. Trying out
                            new food places is another one of my favorite pastimes. I am also a casual gamer and play 
                            online games like Dota 2 and Valorant though I do not claim to be any 
                            good at either of them.
                        </p>
                    </div>
                    <div className='about-picture'>
                        <img className='david-pic' src={david} alt="David"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About