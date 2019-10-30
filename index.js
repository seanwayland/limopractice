import React from "react"
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button';

// import { Provider } from 'react-redux';
// import AutoComplete from '../components/PostAutoComplete'
// import {store} from '../store'

function renderRow(props) {
    const { index, style } = props;
    
  
    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItem>
    );
  }


  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

class App extends React.Component {
    constructor() {
        super();





    }

  

    render() {
        
        return (
            <div>
                {/*<Header/>*/}
                <table>
                    <tbody>
                      
                    { /* this.state.data.map((person, i) => <TableRow key = {i}
                                                                  data = {person} />)     */}  
                    </tbody>
                </table>

                        <TextField
          placeholder="Type in Content"
          label="Type in Content">  </TextField>

          <LimoList/>
         


                  <Button variant="contained" color="primary">
        Welcome Material UI
      </Button> 

                {/*
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
                */}



               {/* <Stuff/> */}



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

class LimoList extends React.Component {

    constructor() {
        super();

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

        

        {/*<FixedSizeList height={400} width={360} itemSize={46} itemCount={200}> */}
        <ListItem button  >
            
        <ListItemText primary={`Item ${this.state.data}`} />
      </ListItem>
      
   
  
        </div>
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
