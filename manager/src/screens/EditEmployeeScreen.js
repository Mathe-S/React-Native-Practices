import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions'
import { Card, CardSection, Buton, Confirm } from '../components/common';
import { useSelector, useDispatch } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from '../components/EmployeeForm';


const EditEmployeeScreen  = ({route: {params}}) => {

    const  {name, phone, shift} = useSelector(state => state.employeeForm);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(employeeUpdate({prop: 'name', value: params.employee.name}));
    dispatch(employeeUpdate({prop: 'phone', value: params.employee.phone}));
    dispatch(employeeUpdate({prop: 'shift', value: params.employee.shift}));
    }, [])
    

    const onButtonPress = () => {
        dispatch(employeeSave({name, phone, shift, uid: params.employee.uid}));
    }
    
    const onTextPress = () => {
        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    const onAccept = () => {
        dispatch(employeeDelete(params.employee.uid));
    }

    const onDecline = () => {
        setShowModal(false);
    }

    return (
        <Card>
            <EmployeeForm name={name} phone={phone} shift={shift} />
            <CardSection>
                <Buton onPress={onButtonPress}>
                    Update Employee
                </Buton>
            </CardSection>
            <CardSection>
                <Buton onPress={onTextPress}>
                    Text Schedule
                </Buton>
            </CardSection> 

            <CardSection>
                <Buton onPress={() => setShowModal(!showModal)} color='red'>
                    Fire Employee
                </Buton>
            </CardSection>

            <Confirm
            visible={showModal}
            onAccept={onAccept}
            onDecline={onDecline}
            >
                Are you sure you want to delete this?
            </Confirm>
        </Card>
    )
}

const styles = StyleSheet.create({});

export default EditEmployeeScreen;