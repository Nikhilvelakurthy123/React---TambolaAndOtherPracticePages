import moment from 'moment'
import React, { Component } from 'react'

export default class TimmerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: moment().format('hh:mm:ss a'),
            minutes: Number(1),
            seconds: Number(1)
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            
            if (this.state.minutes >= 0 && this.state.seconds > 0) {
                this.setState({ time: moment().format('hh:mm:ss a') })
                let a = this.state.seconds
                if (--a === 0) {
                    this.setState({ minutes: this.state.minutes - 1, seconds: Number(59) })
                }
                else {
                    // if(a>=1 && a<=9)
                    //     this.setState({ seconds: "0"+a })    
                    // else
                        this.setState({ seconds: a })
                }
            }
            else{
                this.setState({ minutes: "00", seconds: "00" })
                clearInterval(this)
            }
        }, 1000)
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    
                    <span>{this.state.time}</span>
                    <br />
                    {/* <span></span> */}
                </div>
                <div className="card" style={{width: "18rem"}}>
                    {/* <img src="../public/logo192.png" className="card-img-top" alt="IMG cant find"> */}
                        <div className="card-body" style={{height:"20rem",width: "120rem"}}>
                            <h5 className="card-title">Timmer</h5>
                            <p className="card-text">{this.state.minutes + " : " + this.state.seconds}</p>
                            <ul>
                                <li><button className="btn btn-primary" onClick={()=>{
                                    if(this.state.seconds<=54)
                                        this.setState({seconds:this.state.seconds+5})
                                    else if(this.state.seconds>=55){
                                        let min =  (this.state.seconds + 5) - 60
                                        this.setState({minutes:this.state.minutes+1,seconds: Number(0)+Number(min)})
                                        
                                    }
                                }}>+5</button></li><br/>
                                <li><button className="btn btn-primary" onClick={()=>{
                                    if(this.state.seconds>=6)
                                        this.setState({seconds:this.state.seconds-5})
                                    else if(this.state.seconds<=5 && this.state.minutes >= 0){
                                        let min =  (this.state.seconds - 5)
                                        this.setState({minutes:this.state.minutes-1,seconds: Number(60)+Number(min)})
                                        
                                    }
                                    //else if()
                                }}>-5</button></li>
                            </ul>
                        </div>
                    {/* </img> */}
                    </div>
            </div>
        )
    }
}