import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   data: null,
    //   isLoaded: false,
    //   itemSelected: false,
    //   inputVal: "",
    //   options: [],
    //   selectedOption: ""
    // };
    this.state = {list: [], itemSelected: false, selectedItem: null}

    this.updateState = this.updateState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateState(e) {
    this.setState({ selectedOption: e.target.textContent, itemSelected: true });
    console.log(e.target);
    // eventually I want to render a DIV with data from the selected value
  }

  handleChange(e) {
    console.log(e.target.value);
    console.log(this.state);
    // fetch('http://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // /* .then(json => console.log(json)) */

    // .then(data => this.setState({list: data}));
   var filtered = this.state.list.filter(it => it.body.includes(e.target.value));
   console.log(filtered);
   this.setState({list: filtered})
   console.log(this.state.list)

  }

  handleClick(e, id) {

      console.log(id);
      console.log(this.state.list);
      //var filteredClick = this.state.list.filter(it => it.body.includes(e.target));
      var filteredClick = this.state.list.find(item => item.id === id)

      console.log(filteredClick);
      this.setState({itemSelected: true})
      
       

  }



  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        /* .then(json => console.log(json)) */

        .then(data => this.setState({list: data}));


}
  render() {
    const { isLoaded, itemSelected } = this.state;
    const list = this.state.list


   
    if (itemSelected){

        return (

         <div> item selected </div>
        )
    }

    else {
    return (
       <div>
     
            <TextField
       
              label="Type In Content"
              id="limoText"
              //onChange = {this.fetchData}
             // value=""
              autoSelect={true}
              onChange = {this.handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
          
            />
        <List >

        {
            list.map(item => (
                <ListItem key={`item-${item.id}`}>
                <ListItemText onClick={event => this.handleClick(event, item.id)} primary={`Item ${item.body}`} secondary={item.id}/>
                on
                
                </ListItem> 
                )
            )
        }

        </List>
     </div>

    )
    }
          

  }
}

App.defaultProps = {};

export default App;
