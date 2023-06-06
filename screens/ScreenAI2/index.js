import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const CreateRobotPetProfile = ({
  navigation
}) => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [dateOfAdoption, setDateOfAdoption] = useState('');
  const [description, setDescription] = useState('');
  const [specialAttributes, setSpecialAttributes] = useState('');
  const [buttonText, setButtonText] = useState('Create Profile');

  const handleCreateProfile = () => {
    setButtonText('Pet Created');
    setTimeout(() => {
      navigation.navigate('Pet Gallery');
    }, 2000);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Pet Gallery')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.closeButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.petImage} />
        <TouchableOpacity style={styles.changePhotoButton}>
          <Text style={styles.changePhotoButtonText}>Change Photo</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pet Name</Text>
          <TextInput style={styles.textInput} value={petName} onChangeText={setPetName} />
          <Text style={styles.label}>Pet Type</Text>
          <TextInput style={styles.textInput} value={petType} onChangeText={setPetType} />
          <Text style={styles.label}>Date of Adoption</Text>
          <TextInput style={styles.textInput} value={dateOfAdoption} onChangeText={setDateOfAdoption} />
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.multilineTextInput} value={description} onChangeText={setDescription} multiline />
          <Text style={styles.label}>Special Attributes</Text>
          <TextInput style={styles.multilineTextInput} value={specialAttributes} onChangeText={setSpecialAttributes} multiline />
        </View>
        <TouchableOpacity style={styles.createProfileButton} onPress={handleCreateProfile}>
          <Pressable><Text style={styles.createProfileButtonText}>{buttonText}</Text></Pressable>
        </TouchableOpacity>
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F7'
  },
  header: {
    backgroundColor: '#DFEDF4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  closeButton: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 10
  },
  headerTitle: {
    color: '#376D89',
    fontSize: 24
  },
  body: {
    alignItems: 'center',
    padding: 20
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  changePhotoButton: {
    backgroundColor: '#376D89',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  changePhotoButtonText: {
    color: 'white',
    fontSize: 16
  },
  inputContainer: {
    width: '100%',
    marginTop: 20
  },
  label: {
    color: '#376D89',
    fontSize: 16,
    marginBottom: 5
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  multilineTextInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    minHeight: 60,
    textAlignVertical: 'top'
  },
  createProfileButton: {
    backgroundColor: '#376D89',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20
  },
  createProfileButtonText: {
    color: 'white',
    fontSize: 18
  }
});
export default CreateRobotPetProfile;