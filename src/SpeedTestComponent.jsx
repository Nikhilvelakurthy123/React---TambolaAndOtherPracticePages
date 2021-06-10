import React, { Component } from 'react'
//import 'fast-speedtest'

//npm install --save fast-speedtest-api used


export default class SpeedTestComponent extends Component {
    componentDidMount() {
        // const FastSpeedtest = require("fast-speedtest-api");

        // let speedtest = new FastSpeedtest({
        //     token: "uYpQ7eBMzBoek26O4-FQCz66T1tSUDijo1IKxw", // required
        //     verbose: false, // default: false
        //     timeout: 10000, // default: 5000
        //     https: true, // default: true
        //     urlCount: 5, // default: 5
        //     bufferSize: 8, // default: 8
        //     unit: FastSpeedtest.UNITS.Mbps // default: Bps
        // });

        // speedtest.getSpeed().then(s => {
        //     console.log(`Speed: ${s} Mbps`);
        // }).catch(e => {
        //     console.error(e.message);
        // });
    }
    render() {
        return (
            <div>
                hello
                <div className="card" style={{width: "18rem"}}>
                    {/* <img src="../public/logo192.png" className="card-img-top" alt="IMG cant find"> */}
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    {/* </img> */}
                </div>
            </div>

        )
    }
}