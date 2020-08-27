import '../_mockLocations';
import React, { useContext, useCallback } from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
        <Text style={styles.titile}>Create a Track</Text>
        <Map />
        {!!!err && <Text>Please enable location services</Text>}
        <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={20} />
}

const styles = StyleSheet.create({
    titile: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: '900',
        marginBottom: 5
    }
});

export default withNavigationFocus(TrackCreateScreen);