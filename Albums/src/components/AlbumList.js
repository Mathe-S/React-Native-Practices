import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import AlbumDetail from './AlbumDetail';


const AlbumList  = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => setAlbums(response.data))
    }, []);

    return (
        <View >
            <FlatList 
                data={albums}
                keyExtractor={album => album.title}
                renderItem={ ({item}) => (
                    <AlbumDetail title={item} />
                )}
            />
        </View>
    )
}


export default AlbumList;