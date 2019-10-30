import React from "react"
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';


import ListSubheader from '@material-ui/core/ListSubheader';


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
   
        <List  subheader={<li />}>
      {[0, 1, 2, 3, 4].map(sectionId => (
        <li key={`section-${sectionId}`} >
          <ul >
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {this.state.data.map(item => (
              <ListItem key={`item-${sectionId}-${item.id}`}>
                <ListItemText primary={`Item ${item.body}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
 
        

              {/*}  <ListItemText primary={`Item ${this.state.data}`} /> */}
      
        
    
        
    }
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
