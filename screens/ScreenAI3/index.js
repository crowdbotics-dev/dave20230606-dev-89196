import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

const ProfileEditScreen = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Main St, Anytown USA");
  const [bio, setBio] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.");
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} />
        <Text style={styles.label}>Bio</Text>
        <TextInput style={styles.input} value={bio} onChangeText={setBio} multiline={true} numberOfLines={4} />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F2FF",
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A3B6A"
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  editButton: {
    backgroundColor: "#3A8DFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16
  },
  formContainer: {
    flex: 1
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#1A3B6A"
  },
  input: {
    borderWidth: 1,
    borderColor: "#B0C4DE",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#1A3B6A"
  },
  saveButton: {
    backgroundColor: "#3A8DFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "center"
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16
  }
});
export default ProfileEditScreen;