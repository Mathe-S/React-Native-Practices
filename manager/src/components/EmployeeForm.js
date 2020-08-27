import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {employeeUpdate} from '../actions'
import { Card, CardSection, Input, Buton } from './common';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from 'react-redux';


const EmployeeForm  = ({name, phone, shift}) => {

    const dispatch = useDispatch();
    
    return (
        <View>
            <CardSection>
            <Input 
                label='Name'
                placeholder='Mathe'
                value={name}
                onChangeText={value => dispatch(employeeUpdate({prop: 'name', value}))}
            />
            </CardSection>
 
            <CardSection>
            <Input 
                label='Phone'
                placeholder='555-555-555'
                value={phone}
                onChangeText={value => dispatch(employeeUpdate({prop: 'phone', value}))}
            />
            </CardSection>

            <CardSection >
            <Text style={styles.pickerStyle}>Shift</Text>
            <RNPickerSelect
            style={styles.pickerStyle}
            value={shift}
            onValueChange={value => dispatch(employeeUpdate({prop: 'shift', value})) }
            useNativeAndroidPickerStyle={false}
            placeholder={{label: 'Select Weekday'}}
            items={[
               {label: 'Monday', value: 'Monday' },
               {label: 'Tuesday', value: 'Tuesday'},  
               {label: 'Wednesday', value: 'Wednesday'},   
               {label: 'Thursday', value: 'Thursday' },   
               {label: 'Friday', value: 'Friday' },  
               {label: 'Saturday', value: 'Saturday' },   
               {label: 'Sunday', value: 'Sunday' }  
            ]}
            />
            
            </CardSection>

        </View>
    )
}

const styles = StyleSheet.create({
    pickerStyle: {
    fontSize: 18,
    paddingHorizontal: 20,
    marginRight: 60
    }
});

export default EmployeeForm;