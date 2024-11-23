import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export function Card() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/camisaNike.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.title}>Camiseta Nike</Text>
        <Text style={styles.title}>Algodão Masculina</Text>
      </View>
      <View style={styles.detailsGroup}>
        <Text style={styles.details}>Casual</Text>
        <Text style={styles.details}>Preta</Text>
      </View>
      <Text style={styles.price}>
        R$ 150,00 <Text style={styles.pix}>no Pix</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    width: 215,
    height: 380,
    marginBottom: 6,
  },
  imageContainer: {
    height: 250,
    width: "100%",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  detailsGroup: {
    marginVertical: 8,
  },
  details: {
    fontSize: 13,
    color: "#666666",
  },
  price: {
    fontSize: 17,
    fontWeight: "600",
  },
  pix: {
    fontWeight: 400,
    fontSize: 14,
  },
});
