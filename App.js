import React from "react"

import TextField from '@material-ui/core/TextField';


import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import Autocomplete from '@material-ui/lab/Autocomplete';


function renderRow(props) {
    const {index, style} = props;


    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={`Item ${index + 1}`}/>
        </ListItem>
    );
}


renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
};

class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isLoaded: false,
            itemSelected: false,
            inputVal: null

        };
    }

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

                        onChange={(e) => {
                            this.setState({e, itemSelected: true});
                            alert(e.target.value);
                        }
                        }

                        options={limo.map(option => "body: '" + option.body + '\n' + "'      id: " + option.id)}
                        renderInput={params => (

                            <TextField
                                {...params}
                                label="Type In Content"
                                id="limoText"
                                value = {this.state.inputValue}


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

App.defaultProps = {

    headerProp: "Header from props...",
    contentProp: "Content from props...",
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
