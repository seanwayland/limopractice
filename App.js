import React from "react"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isLoaded: false,
            itemSelected: false,
            inputVal: ''}

            this.updateState = this.updateState.bind(this)

        };

        updateState(e) {
            this.setState({inputVal: e.target.value});
            this.state.itemSelected = true;
            console.log(e.target.value)
            // eventually I want to render a DIV with data from the selected value
        }

        /// fetch some data

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            /* .then(json => console.log(json)) */

            .then(data => this.setState({data, isLoaded: true}));


    }

    render() {

        var isloaded = this.state.isLoaded;
        var itemSelected = this.state.itemSelected;


        if (!isloaded) {
            return <div> loading ...</div>;
        } else if (itemSelected) {
            return <div> item selected </div>
        } else {
            const limo = this.state.data;
            return (
                <div>

                    <Autocomplete
                        freeSolo
                        disableClearable
                        autoselect="true"
                        id = "limoSelect"
                        onChange={this.updateState}
                        value = {this.state.inputVal}
                        options={limo.map(option => "body: '" + option.body + '\n' + "'      id: " + option.id)}
                        renderInput={params => (

                            <TextField
                                {...params}
                                label="Type In Content"
                                id="limoText"
                                value = ''
                                autoselect="true"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                InputProps={{...params.InputProps, type: 'search'}}

                            />


                        )}
                    />
                </div>
            );

        }
    }
}

App.defaultProps = {}

export default App;
