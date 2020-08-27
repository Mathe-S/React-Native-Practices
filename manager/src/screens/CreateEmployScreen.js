import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {employeeUpdate, employeeCreate} from '../actions'
import { Card, CardSection, Input, Buton } from '../components/common';
import { useSelector, useDispatch } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import EmployeeForm from '../components/EmployeeForm';


const CreateEmployScreen  = () => {

    const  {name, phone, shift} = useSelector(state => state.employeeForm);
    const dispatch = useDispatch();

    const onButtonPress = () => {
        dispatch(employeeCreate({name, phone, shift}));
    }
    
    return (
        <Card>
            <EmployeeForm name={name} phone={phone} shift={shift} />
            <CardSection>
                <Buton onPress={onButtonPress}>
                    Create
                </Buton>
                </CardSection> 
        </Card>
    )
}

const styles = StyleSheet.create({});

export default CreateEmployScreen;