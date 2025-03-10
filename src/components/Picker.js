import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import OutputScreen from "../../Screens/OutputScreen";
import RadioForm from 'react-native-simple-radio-button';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const PickerDemo = () => {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [currency, setCurrency] = useState('US Dollar');
    const [slideValue, setSlideValue] = useState(0);
    const [isModalVisible, setIsModalVisible] =useState(false);
    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    }
    const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
    const options = [
      { label: 'Apple', value: 'apple' },
      { label: 'Samsung', value: 'samsung' },
      { label: 'Nokio', value: 'nokio'}
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}>Demo Form</Text>
            <View>
                <TextInput placeholder="Email" style={styles.inputStyle} value={email} onChangeText={setEmail}/>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputStyle} value={passwd} onChangeText={(text)=>setPasswd(text)}/>
                <Picker
                    selectedValue={currency}
                    onValueChange={currentCurrency => setCurrency(currentCurrency)}>
                    <Picker.Item label="USD" value="US Dollars" />
                    <Picker.Item label="EUR" value="Euro" />
                    <Picker.Item label="NGN" value="Naira" />
                </Picker>
                <Text style={styles.textStyle}>
                    Selected: {currency}
                </Text>
            </View>
            <View>
                <Text style={styles.textStyle}>
                    Rate your teams performance this quarter
                </Text>
                <Slider
                  style={{marginTop: 20}}
                  step={1}
                  minimumValue={0}
                  maximumValue={100}
                  value={slideValue}
                  onValueChange={slideNum => setSlideValue(slideNum)}
                  minimumTrackTintColor="#1fb28a"
                  maximumTrackTintColor="#d3d3d3"
                  thumbTintColor="#257ff5"
                />
                <Text style={styles.textStyle}>
                  Slide value: {slideValue}%
                </Text>
              </View>
              <View>
      <RadioForm style={styles.text}
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />
    </View>
              <View>
                  <Button style={styles.buttonStyle} title="View Data" onPress={toggleModal}/>
                  <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={toggleModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <OutputScreen email={email} passwd={passwd} currency={currency} slideval={slideValue} radiobtn={chosenOption}/>
                            {/* <OutputScreen/> */}
                            <Button title="Hide modal" onPress={toggleModal} />
                        </View>
                    </View>
                </Modal>
                </View>   
                
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#17d5eb',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    formLabel: {
      fontSize: 20,
      color: '#fff',
    },
    inputStyle: {
      marginTop: 20,
      width: 300,
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: '#b9e4c9',
    },
    formText: {
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 20,
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
    textStyle: {
      fontSize: 18,
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      marginTop: 20,
    },
    buttonStyle: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(15, 13, 13, 0.87)',
  },
  modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
  }
  });
export default PickerDemo;