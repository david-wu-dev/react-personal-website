import React from 'react';
// import generator from "./Generator architecture.png"
// import discriminator from "./Discriminator Architecture.png"
import ganresult from "./DCGAN result.PNG";
import {useHistory} from 'react-router-dom';
import './gan-project.css';

const GanProject = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = { images: "temp"};
    // }

    // async componentDidMount() {
    //     // fetch("http://127.0.0.1:5000/")
    //     // .then(response => response.blob())
    //     // .then(myblob => {
    //     //     var reader = new FileReader();
    //     //     reader.readAsDataURL(myblob);
    //     //     reader.onloadend = function() {
    //     //         var base64data = reader.result;
    //     //         console.log(base64data);
    //     //     }
    //     // })

    //     let response = await fetch("http://127.0.0.1:5000/")
    //     console.log(response)
    //     let myblob = await response.blob()
    //     let reader = new FileReader();
    //     reader.readAsDataURL(myblob);
    //     reader.onload = () => this.setState({images: reader.result})
        
    // }

    // async handleClick() {

    //     let response = await fetch("http://127.0.0.1:5000/adduser", {
    //     method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({"name": "hello"})})
    //     console.log(response)
    // }
    
    let history = useHistory();

    // render() {
        return (
            <div className='gan-project'>
                <div>
                    <ul className='back-button'>
                        <li>
                            <button className='back' onClick={() => history.goBack()}>{'< go back'}</button>
                        </li>
                    </ul>
                </div>
                <div className="content-box">
                    <div className="gan-description">
                        <div className="gan-title">
                            DCGAN Project
                        </div>
                        <p className="DCGAN-description">
                            A generative adversarial network (GAN) is a class of neural networks that are often
                            used to create new high quality samples of data. The core idea behind a GAN is to use
                            two neural networks that compete with one another in a zero-sum game. One neural net
                            attempts to distinguish between real samples of data and artificially generated samples
                            of data and the other neural net attempts to generate realistic-looking data starting from
                            random noise. <br/> <br/>

                            In this project, I implemented a DCGAN in PyTorch with label smoothing and compared the
                            results to a non-convolutional GAN.          
                        </p>
                        <div className='code-link'>
                            <a id="gan-button" class="btn btn-primary" href="https://github.com/david-wu-dev/Pytorch-MNIST-DCGAN/" role="button">{"</> CODE"}</a>
                        </div>
                    </div>

                    <div className="GAN-image">
                        <img className="pic" src={ganresult} alt="Sample Generator Output"/>
                    </div>
                    {/* <div className="graphics">
                        <img className="pic" src={generator} alt="Generator Architecture Diagram"/>
                        <img className="pic" src={discriminator} alt="Discriminator Architecture Diagram"/>
                    </div>

                    <div>
                        <button onClick={() => this.handleClick()}>click me</button>
                        <img className="gen-result" src={this.state.images} alt="gen output"/>
                    </div> */}
                </div>
            </div>
        )
    // }
}

export default GanProject