import React, { Component } from 'react'
import moment from 'moment'

export default class HackerRank1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      slides: ["hai", "hello", "bye", "stop"],
      defaultContent: "",
      next: Number(0),
      disabled: true,
      time: Date.now(),
      pause:true
    }

    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleRefresh = this.handleRefresh.bind(this)
  }

  componentDidMount() {
    this.setState({ defaultContent: this.state.slides[0],next: Number(0) })
    document.getElementById('next').disabled = false
    document.getElementById('previous').disabled = true
    document.getElementById("refresh").disabled = true

    this.interval = setInterval(() => this.setState({ time: moment().format("MM ddd, YYYY hh:mm:ss a") }), 1000);

    if(!this.state.pause){
     // this.scroolText()
    }
    console.log(this.state.pause)
  }

  scroolText(){
    this.interval = setInterval(() => {
      //let size = this.state.slides.length
      if (document.getElementById('next').disabled) {
        this.setState({ defaultContent: this.state.slides[0], next: Number(0) })
        document.getElementById('next').disabled = false;
        document.getElementById('previous').disabled = true;
        document.getElementById('refresh').disabled = true;
      }
      else
        this.handleNext()
    }, 5000);
  }

  componentWillUnmount() {
    this.setState({ next: Number(0) })
    clearInterval(this.interval);
  }

  handleNext() {
    let a = this.state.next
    //console.log(a)
    a = a + 1
    console.log(a)
    console.log(this.state.slides.length)
    console.log(this.state.slides[a])
    this.setState({ next: a })

    if (a + 1 === this.state.slides.length) {
      document.getElementById('next').disabled = this.state.disabled
      document.getElementById('previous').disabled = false

    }
    if (a >= 1) {
      document.getElementById("refresh").disabled = false
      document.getElementById('previous').disabled = false
    }
    //console.log(this.state.slides[a])
    this.setState({ defaultContent: this.state.slides[a] })
  }

  handlePrevious() {
    let a = this.state.next
    console.log(a)
    a = a - 1
    //console.log(a)
    if (a === 0) {
      document.getElementById("previous").disabled = true
      document.getElementById("refresh").disabled = true
    }
    if (a > 0) {
      //document.getElementById("refresh").disabled = false
      document.getElementById("next").disabled = false
    }
    this.setState({ next: a, defaultContent: this.state.slides[a] })
  }

  handleRefresh() {
    if (this.state.next >= 1)
      this.componentDidMount()

  }

  render() {
    return (
      <div className="container">
        {this.state.time}
        <br />
        <div>
          <button className="btn btn-success" id="refresh" onClick={this.handleRefresh}>Refresh</button>
          <button className="btn btn-success" onClick={this.handlePrevious} id="previous">Previous</button>
          <button className="btn btn-success" onClick={this.handleNext} id="next">Next</button>
          <button className="btn btn-dark" onClick={() => {
            this.setState({pause:true})
            // document.getElementById('pause').disabled=true
            // document.getElementById('un pause').disabled=false
            console.log(this.state.pause)
            this.componentDidMount()
            
            }} id="pause">Pause</button>
          <button className="btn btn-dark" onClick={() => {
            this.setState({pause:false})
            //this.componentDidMount()
            // document.getElementById('pause').disabled=false
            // document.getElementById('un pause').disabled=true
            console.log(this.state.pause)
            this.componentDidMount()
            
            }} id="un pause">UN Pause</button>
        </div>
        <br />
        <div className="row">
          <span className="bg-dark" style={{
            width: "600px", height: "400px", verticalAlign: "center",
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid aqua",
            marginLeft: "20px",
            color: "white"
          }}><center>{this.state.defaultContent}</center></span>
        </div>
      </div>
    )
  }
}