import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import './HackerRank1.jsx'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      v1: 0,
      v2: 0,
      v3: 0,
      base: 0,
      height: 0,
      s1: 0, s2: 0, s3: 0,
      sum: false,
      root: false,
      triangle: false,
      swap: false,

      cricket: [],
      country: "India",
      display: true,
      date: moment().format("YYYY-MM-DD"),
      datedisplay:true,
      selectedFixtures:[],
      flagFixtures:false,
      country1:"",
      date1:moment().format("YYYY-MM-DD")
    }

    this.handleChange = this.handleChange.bind(this)
    this.api = this.api.bind(this)
    this.userDefined = this.userDefined.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    console.log("asd")
    //document.write("ads")
    this.api()
  }

  api() {
    axios.get("https://cricapi.com/api/matches?apikey=CFq8UpPvKMZw15tKmKPVYpWtX8K2")
      .then(response => {
        console.log(response.data.matches[0].winner_team);
        this.setState({ cricket: response.data.matches })
      })
      .catch(err => {
        console.error(err);
      })
  }

  userDefined(){
      if(this.state.country1 !== "" ){
        this.state.cricket
        .filter(response => (response['team-1'].toLowerCase() === this.state.country.toLowerCase() ) || response['team-2'].toLowerCase() === this.state.country.toLowerCase())
        .map(( (response) =>
            this.setState({ selectedFixtures : response })
        ))
      }

      this.setState({ flagFixtures : true })

  }

  //try to display today's date matches
  render() {
    return (

      <div >
        {/* <header className="header">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="/" className="navbar-brand">React Practise</a>
            </div>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              <li><a className="nav-link" href="/">Home</a></li>
              <li><Link className="nav-link" to="./HackerRank1">Home</Link></li>
            </ul>
          </nav>
        </header> */}


        {/* Hello */}
        <div className="container">
          <span className="span span-primary">Counter Example</span>
          <p className="form-control">
            {this.state.counter}
          </p>
          <button onClick={() => this.setState({ counter: this.state.counter + 1 })} className="btn btn-secondary">Add + 1</button>
          <button onClick={() => this.setState({ counter: this.state.counter - 1 })} className="btn btn-primary">Add - 1</button>
        </div>
        <br />
        <div className="container">
          <input type="Number" name="v1" value={this.state.v1} onChange={this.handleChange} className="btn btn-secondary" /><br />
          <input type="Number" name="v2" value={this.state.v2} onChange={this.handleChange} className="btn btn-light" />
          <br />
          <button onClick={() => this.setState({ sum: Number(this.state.v1) + Number(this.state.v2) })} className="btn btn-primary">Add</button>
          <br />
          {this.state.sum && <p>The Sum is {this.state.sum}</p>}
        </div>

        <div className="container">
          <input type="Number" name="v3" value={this.state.v3} onChange={this.handleChange} className="form-control" /><br />
          <br />
          <button onClick={() => this.setState({ root: Math.sqrt(Number(this.state.v3)) })} className="btn btn-primary">Square Root</button>
          <br />
          {this.state.root && <p className="form-control">The Square Root is {this.state.root}</p>}
        </div>

        <div className="container">
          <input type="Number" name="base" value={this.state.base} onChange={this.handleChange} className="form-control" /><br />
          <input type="Number" name="height" value={this.state.height} onChange={this.handleChange} className="form-control" />
          <br />
          <button onClick={() => this.setState({ triangle: 0.5 * Number(this.state.base) * parseFloat(this.state.height, 10) })} className="btn btn-primary">Area Of Triangle</button>
          <br />
          {this.state.triangle && <p className="form-control"> The Area of Triangle is {this.state.triangle}</p>}
        </div>

        <div className="container">
          <input type="Number" name="s1" value={this.state.s1} onChange={this.handleChange} className="form-control" /><br />
          <input type="Number" name="s2" value={this.state.s2} onChange={this.handleChange} className="form-control" />
          <br />
          <button onClick={() => {
            this.s3 = this.state.s1;
            this.setState({ s1: this.state.s2, s2: this.s3, swap: true })
          }
          } className="btn btn-primary">Swap</button>
          <br />
          {this.state.swap && <p className="form-control">After the Swap {this.state.swap}</p>}
        </div>
        <br />
        <hr />
        <div className="container rounded-3">
          <div className="form-group pmd-textfield pmd-textfield-floating-label">
            <label className="label label-primary">Enter the Country Name to get the Upcoming Fixtures</label>
            <input type="text" value={this.state.country} name="country" onChange={this.handleChange} onBlur={() => this.setState({ display: true })} autoComplete="off" className="form-control" />
            <input type="date" value={this.state.date} name="date" onChange={this.handleChange} onBlur={() => this.setState({ datedisplay: true })} autoComplete="off" className="form-control" />

            {/* <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker">
              <input placeholder="Select date" type="text" id="example" className="form-control" />
                <label for="example">Try me...</label>
                <i className="fas fa-calendar input-prefix" tabindex="0"></i>
            </div> */}

          </div>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr><th>Time</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Format</th>
                <th>Toss Winner</th>
                <th>Match Winner</th>
                <th>Match Started</th>
              </tr>
            </thead>
            <tbody>

              {this.state.display &&
                //var i = 0
                this.state.cricket
                  .filter(response => (response['team-1'].toLowerCase() === this.state.country.toLowerCase() ) || response['team-2'].toLowerCase() === this.state.country.toLowerCase())
                  .filter(response => JSON.stringify(response.dateTimeGMT.split("T")[0]).slice(1, 11) === this.state.date)
                  .map(((response) =>
                    <tr key={response.unique_id}>
                      <td>{JSON.stringify(response.dateTimeGMT.split("T")[0]).slice(1, 11).split("-").reverse().join("-")}</td>
                      <td className="table-primary">{response['team-1']}</td>
                      <td className="table-info">{response['team-2']}</td>
                      <td>{response.type}</td>
                      <td>{response.toss_winner_team}</td>
                      <td>{response.winner_team}</td>
                      <td>{JSON.stringify(response['matchStarted'])}</td>
                    </tr>

                  ))
              }
            </tbody>
          </table>
        </div>


        <div className="container rounded-3">
          <div className="form-group pmd-textfield pmd-textfield-floating-label">
            <label className="label label-primary">Enter the Country Name to get the Upcoming Fixtures</label>
            
            <input type="text" value={this.state.country1} name="country1" onChange={this.handleChange}  autoComplete="off" className="form-control" />
            <input type="date" value={this.state.date1} name="date1" onChange={this.handleChange}  autoComplete="off" className="form-control" />

            <button className="btn btn-light" onClick={this.userDefined}><strong>Submit</strong></button>  
          </div>

          <table className="table table-striped">
            <thead className="thead-dark">
              <tr><th>Time</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Format</th>
                <th>Toss Winner</th>
                <th>Match Winner</th>
                <th>Match Started</th>
              </tr>
            </thead>
            <tbody>

              {this.state.flagFixtures &&
                this.state.selectedFixtures.map(response => (
                    <tr key={response.unique_id}>
                      <td>{JSON.stringify(response.dateTimeGMT.split("T")[0]).slice(1, 11).split("-").reverse().join("-")}</td>
                      <td className="table-primary">{response['team-1']}</td>
                      <td className="table-info">{response['team-2']}</td>
                      <td>{response.type}</td>
                      <td>{response.toss_winner_team}</td>
                      <td>{response.winner_team}</td>
                      <td>{JSON.stringify(response['matchStarted'])}</td>
                    </tr>

                  ))
              }
            </tbody>
          </table>
          <br/>
          <br/>
          <br/>
        </div>


        {/* <footer className="footer">
          <div className="container text-center">
            <span className="text-muted">All rights</span>
          </div>
        </footer> */}

      </div>


    )
  }
} 