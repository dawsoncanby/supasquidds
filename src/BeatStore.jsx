import React, { Component } from 'react';
import { FlatList } from 'react-native';

class BeatStore extends Component {
    constructor(props) {
        super(props);

        // display all beats at the beginning
        this.setState({
            activeFilters: [],
            shownItems: props.allBeats
        });
    }

    render() {
        <div>
            <FlatList
            />
        </div>
    }
}

export default BeatStore;