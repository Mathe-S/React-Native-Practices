import React from 'react';
import { StyleSheet, Text} from 'react-native';

const Spacer = ({children}) => {
    return <Text style={styles.spacer}>{children}</Text>
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default Spacer;