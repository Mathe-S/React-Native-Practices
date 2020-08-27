import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import { CardSection } from './CardSection';
import { Buton } from './Buton';


const Confirm  = ({children, visible, onAccept, onDecline}) => {

    const {cardSectionStyle, textStyle, containerStyle} = styles;
    
    return (
        <Modal
        visible={visible}
        transparent
        animationType='slide'
        onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Buton onPress={onAccept} color='red'>Yes</Buton>
                    <Buton onPress={onDecline}>No</Buton>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});

export {Confirm};