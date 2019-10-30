import React from "react"
// import { Provider } from 'react-redux';
// import AutoComplete from '../components/PostAutoComplete'
// import {store} from '../store'
class App extends React.Component {
    constructor() {
        super();


        {/**
        this.state = {
            header: "Header from state...",
            content: "Content from state...",
            data:
                [
                    {
                        "id":1,
                        "name":"Seano",
                        "age":"30"
                    },
                    {
                        "id":2,
                        "name":"Stevo",
                        "age":"35"
                    },
                    {
                        "id":3,
                        "name":"Bob",
                        "age":"25"
                    }
                ]
        }
        */}


    this.state = {
        data: null,
      };
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
         /* .then(json => console.log(json)) */

        
        .then(data => this.setState({ data }));
        
        
    }
  
    

    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                        {  console.log(this.state.data) }
                    { /* this.state.data.map((person, i) => <TableRow key = {i}
                                                                  data = {person} />)     */}  
                    </tbody>
                </table>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>

                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>



                <Stuff/>



            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Stuff extends React.Component {
    render() {
        return (
            <div>
            <h1>Mortgage Master</h1>
            <h2>loves me </h2>
        <p>This is it!!!</p>


        </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}



App.defaultProps = {
    headerProp: "Header from props...",
    contentProp:"Content from props...",
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) {
        return e
    },
    propNumber: 1,
    propString: "Lets Do this...",

    propObject: {
        objectName1: "Bazza",
        objectName2: "Shazza",
        objectName3: "Gazza"
    }
}
export default App;
