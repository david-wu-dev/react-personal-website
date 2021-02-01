import React from 'react';
import stocks from "./stockmarket.jpg";
import {useHistory} from 'react-router-dom';
import './stock-rl.css';

const StockRL = props => {
    // render() {
        let history = useHistory();
        return (
            <div className='rl-project'>
                <div>
                    <ul className='back-button'>
                        <li>
                            <button className='back' onClick={() => history.goBack()}>{'< go back'}</button>
                        </li>
                    </ul>
                </div>
                <div className="content-box">
                    <div className="rl-content">
                        <div className="rl-title">
                            Deep Reinforcement Learning: Stock Trading
                        </div>
                        <p className="rl-description">
                            In the past few years, deep reinforcement learning has had many successes
                            ranging from mastering the game of Go to solving the problem of protein folding. Nowadays
                            there are variants of deep reinforcement learning algorithms. <br/> <br/>
                            
                            In this project, I applied the principles of reinforcement learning to train an agent to trade in the stock market.
                            I first created a stock trading environment by constructing stock market indicator input features. I then implemented
                            my own version of the advantage actor-critic architecture in PyTorch. I additionally trained a deep Q-learning
                            network starting from the models provided by OpenAI. One key success is that the agents learned how to
                            preserve portfolio value, a principle that experienced investors say is extremely important.

                        </p>
                        <div className='code-link'>
                            <a id="rl-code-button" class="btn btn-primary" href="https://github.com/david-wu-dev/Deep-RL-Stock-Trading/" role="button">{"</> CODE"}</a>
                        </div>
                    </div>

                    <div className="rl-image">
                        <img className="pic" src={stocks} alt="Stock Market Indicators"/>
                    </div>
                </div>
            </div>
        )
    // }
}

export default StockRL