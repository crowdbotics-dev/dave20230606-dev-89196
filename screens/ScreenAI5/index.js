import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PetDetailsScreen = ({
  route
}) => {
  const pet = route?.params?.pet;
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.closeButton} />
        <Text style={styles.title}>{pet?.name}</Text>
        <View style={styles.closeButton} />
      </View>
      <View style={styles.body}>
        <Image source={require("./exabier_matrix_style_code_raining_from_the_sky_in_a_lightning_s_7be44c23-9e73-4832-8143-b079e7982f86.png")} style={styles.petImage} />
        <View style={styles.petInfo}>
          <View style={styles.petName}>
            <Text style={styles.petNameText}>{pet?.name}</Text>
            <Image source={{
            uri: pet?.is_favorite ? "https://tinyurl.com/42evm3m3" : "https://tinyurl.com/4y5j8z8w"
          }} style={styles.favoriteIcon} />
          </View>
          <View style={styles.petDetails}>
            <View style={styles.petDetail}>
              <Text style={styles.label}>Pet Type</Text>
              <Text style={styles.description}>{pet?.type}</Text>
            </View>
            <View style={styles.petDetail}>
              <Text style={styles.label}>Date of Adoption</Text>
              <Text style={styles.description}>{pet?.date_adopted}</Text>
            </View>
            <View style={styles.petDetail}>
              <Text style={styles.label}>Description</Text>
              <Text style={styles.description}>{pet?.description}</Text>
            </View>
            <View style={styles.petDetail}>
              <Text style={styles.label}>Special Attributes</Text>
              <Text style={styles.description}>{pet?.attributes}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF5F7"
  },
  header: {
    backgroundColor: "#DFEDF4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  title: {
    color: "#376D89",
    fontSize: 20,
    fontWeight: "bold"
  },
  closeButton: {
    width: 20,
    height: 20,
    backgroundColor: "#376D89"
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20
  },
  petImage: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
    marginBottom: 20
  },
  petInfo: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  petName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20
  },
  petNameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#376D89"
  },
  favoriteIcon: {
    width: 20,
    height: 20
  },
  petDetails: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  petDetail: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10
  },
  label: {
    width: 150,
    color: "#376D89",
    fontWeight: "bold"
  },
  description: {
    flex: 1,
    color: "#7D9BAA",
    marginLeft: 10,
    textAlign: "justify"
  }
});
export default PetDetailsScreen;