import React from 'react';
import { Text, View, StyleSheet, Image, Button, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Buton from './Buton';


const AlbumDetail  = ({title: {title, artist, thumbnail_image, image, url}}) => {

    
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}} />
                </View>
                <View style={styles.headerContentStyle}>
                <Text style={styles.headetTextStyle}>{title}</Text>
                <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{uri: image}} />
            </CardSection>
            <CardSection>
                <Buton onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Buton>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headetTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;