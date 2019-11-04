import React from "react";
import TextField from "@material-ui/core/TextField";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {list: [], itemSelected: false, selectedItem: {}, biglist: []}

    this.updateState = this.updateState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
  }

  updateState(e) {
    this.setState({ selectedOption: e.target.textContent, itemSelected: true });
    console.log(e.target);

  }

  handleChange(e) {


    //console.log(e.target.value);
    console.log(this.state);
   var filtered = this.state.biglist.filter(it => it.body.includes(e.target.value));
   console.log(filtered);
   this.setState({list: filtered})
   console.log(this.state.list)

  }

  handleClick(e, id) {

      console.log(id);
      console.log(this.state.list);
      //var filteredClick = this.state.list.filter(it => it.body.includes(e.target));
      var filteredClick = this.state.biglist.find(item => item.id === id)

      console.log(filteredClick);
      this.setState({itemSelected: true, selectedItem: filteredClick});
      
      
  }

  handleSelectedChange(e){
    this.setState({itemSelected: false})
  }



  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        /* .then(json => console.log(json)) */

        .then(data => this.setState({biglist: data}));

        console.log(this.state.biglist)


}
  render() {
    const { isLoaded, itemSelected } = this.state;
    const list = this.state.list


   
    if (itemSelected){

        console.log(this.state.selectedItem);

        return (

         <div> 

                         <TextField
       
       label="Type In Content"
       id="limoSelected"
       //onChange = {this.fetchData}
      // value=""
       autoSelect={true}
       onChange = {this.handleSelectedChange}
       margin="normal"
       variant="outlined"
       fullWidth
   
     />
             
         <p>userId: {this.state.selectedItem.userId}</p>
         <p>Id: {this.state.selectedItem.Id}</p>
         <p>title: {this.state.selectedItem.title} </p>
         <p>body: {this.state.selectedItem.body}</p>
       
             
             
             
              </div>
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
