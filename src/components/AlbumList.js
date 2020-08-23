import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//const AlbumList = () => {}: Functional component
//Using Class based Component
class AlbumList extends Component {
    state = { albums: [] };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }

    render() {
        console.log(this.setState);
        return (
            <View>
                {this.renderAlbums}
            </View>
        );
    }
}

export default AlbumList;