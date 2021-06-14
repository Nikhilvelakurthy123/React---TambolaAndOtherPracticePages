import React, { Component } from 'react'

class TambolaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: Number(3),
            arrayNumbers: [],
            numberPos: [],
            bgColor: ""
        }
        this.handleRows = this.handleRows.bind(this)
    }

    componentDidMount() {
        let a = []
        for (let i = 0; a.length < 15; i++) {
            let value = Math.floor(Math.random() * (100))
            //console.log(value)
            if (!a.includes(value))
                a.push(value)
        }
        a.sort((a, b) => a > b ? 1 : -1)
        console.log("Numbers = ", a)
        let pos = []
        for (let i = 0; pos.length < 15; i++) {
            let value = Math.floor(Math.random() * 27)
            //console.log(value)
            if (!pos.includes(value + 1))
                pos.push(value + 1)
        }
        let b = []

        pos.sort((a, b) => a > b ? 1 : -1)
            .map((item, i) => b.push(item))
        console.log("Positions = ", b)
        this.setState({ arrayNumbers: a, numberPos: b })
    }

    changeColor() {
        //if()
        this.setState({ black: !this.state.black })
    }

    handleRows() {
        //console.log("HandleRows :: ")
        let rows = []
        let key = 1, pos = 0, loop = 0, id = 0
        for (let j = 0; j < 3; j++) {
            const cells = [];
            for (let i = 0; i < 9; i++) {
                pos++
                if (this.state.numberPos.includes(pos))
                    cells.push(<td key={key++} style={{ width: "80px", height: "80px" }}><button className="btn btn-light" style={{ width: "100%", height: "100%", backgroundColor: this.state.bgColor }} id={id++} onClick={(event) => {
                        //document.getElementById(event.target.id).style.backgroundColor="green"
                        if (document.getElementById(event.target.id).style.backgroundColor === "green")
                            document.getElementById(event.target.id).style.backgroundColor = "Grey"
                        else
                            document.getElementById(event.target.id).style.backgroundColor = "green"
                    }}>{this.state.arrayNumbers[loop++]}</button></td>)
                else {
                    cells.push(<td key={key++} style={{ width: "80px", height: "80px" }}></td>)
                }
            }
            id=j
            rows.push(<tr className="form__table-row" key={key++}>{cells}</tr>);
        }
        return rows
    }
    render() {
        return (
            <div className="container container-responsive">
                <table className="table table-bordered table-dark ">
                    <tbody >
                        {this.handleRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TambolaComponent;