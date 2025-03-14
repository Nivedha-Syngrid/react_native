import React, { useState } from "react";
import { ScrollView,Text, StyleSheet, View, TextInput, Button, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import OutputScreen from "../../Screens/OutputScreen";
import RadioForm from 'react-native-simple-radio-button';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
    const chk_options = [
      { label: "Red", value: "red" },
      { label: "Blue", value: "blue" },
      { label: "Green", value: "green" }
    ];
  
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const toggleCheckbox = (value) => {
      if (selectedOptions.includes(value)) {
        setSelectedOptions(selectedOptions.filter(item => item !== value));
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    };
    
    return (
        <View style={styles.container}>
          <ScrollView>
            <View>
            <Text style={styles.formLabel}>Demo Form</Text>
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
                <RadioForm style={styles.text} radio_props={options} initial={0} onPress={(value) => { 
                  setChosenOption(value);
                }}/>
              </View>
              <View>
              <Text style={styles.textStyle}>
                    Check the colors you want:
                </Text>
              {chk_options.map((chk_option) => (
                <TouchableOpacity
                  key={chk_option.value}
                  style={styles.checkBox}
                  onPress={() => toggleCheckbox(chk_option.value)}
                >
                  <MaterialIcons
                    name={selectedOptions.includes(chk_option.value) ? "check-box" : "check-box-outline-blank"}
                    size={24}
                    color="#007AFF"
                  />
                  <Text style={styles.text}>{chk_option.label}</Text>
                </TouchableOpacity>
              ))}
                <Text style={styles.selectedText}>Selected: {selectedOptions.join(", ")}</Text> 
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
                            <OutputScreen email={email} passwd={passwd} currency={currency} slideval={slideValue} radiobtn={chosenOption} chkbtn={selectedOptions}/>
                            {/* <OutputScreen/> */}
                            <Button title="Hide modal" onPress={toggleModal} />
                        </View>
                    </View>
                </Modal>
                </View>   
          </ScrollView>      
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
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: "black",
  }
  });
export default PickerDemo;