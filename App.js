import React, { Component } from "react";
import Pink from './Image/pink.jpeg';
import Blue from './Image/blue.jpeg';
import Green from './Image/green.jpeg';
import Violet from './Image/violet.png';
import Barbie from './Image/Barbie.mp4';
import './IVC.css';
class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <img src={Blue} className="p1" alt="Asus" width={300} height={300}/>
                        <img src={Pink} className="p2" alt="Iphone" width={300} height={300}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <video src={Barbie} width="600" height="300" controls="controls" autoplay="true" className="videos"/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <img src={Green} className="p1" alt="oneplus" width={300} height={300}/>
                    <img src={Violet} className="p2" alt="oneplus" width={300} height={300}/>
                    </div>

                </div>
            </div>
            
            
        );
    }
}

export default App;