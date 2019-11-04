import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoaded: false,
      itemSelected: false,
      inputVal: "",
      options: [],
      selectedOption: ""
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({ selectedOption: e.target.textContent, itemSelected: true });
    console.log(e.target);
    // eventually I want to render a DIV with data from the selected value
  }

  /// fetch some data

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(res => {
        const options = res.map(
          ele => "body: '" + ele.body + "\n" + "'      id: " + ele.id
        );
        this.setState({ options: options, isLoaded: true });
      });
  }

  render() {
    const { isLoaded, itemSelected } = this.state;
    const autoCompleteRender = (
      <Autocomplete
        freeSolo
        disableClearable
        autoSelect={true}
        id="limoSelect"
        onChange={this.updateState}
        value={this.state.inputVal}
        options={this.state.options}
        renderInput={params => (
          <TextField
            {...params}
            label="Type In Content"
            id="limoText"
            value=""
            autoSelect={true}
            margin="normal"
            variant="outlined"
            fullWidth
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    );

    if (!isLoaded) {
      return <div> loading ...</div>;
    } else if (itemSelected) {
      return <div> {this.state.selectedOption} </div>;
    } else {
      return <>{autoCompleteRender}</>;
    }
  }
}

App.defaultProps = {};

export default App;
