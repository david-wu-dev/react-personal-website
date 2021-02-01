import React from 'react';
import Typical from 'react-typical';
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className='intro'>
                    <div className='hi'>
                        Hi I'm
                    </div>
                    <div className='name'>
                        David Wu
                    </div>
                    <div className='personal'>
                        Computer Science - MIT Class of 2023. <br/>I am interested 
                        in {' '} 
                        <Typical className='text-animation' 
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                'machine learning.',
                                1000,
                                'physics.',
                                1000,
                                'software engineering.',
                                1000,
                                'algorithms.',
                                1000, 
                                'economics.',
                                1000
                            ]}
                        />
                    </div>
                    <div className='buttons'>
                        <a id="github-button" class="btn btn-primary" href="https://github.com/david-wu-dev/" role="button">{"CODE ON GITHUB >"}</a>
                        <a id="linkedin-button" class="btn btn-primary" href="https://www.linkedin.com/in/david-h-wu/" role="button">{"LINKEDIN PROFILE >"}</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Home