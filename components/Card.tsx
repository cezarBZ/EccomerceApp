import { IProduct } from "@/interfaces/product";
import { Link, useNavigation, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

type cardProps = {
  infos: IProduct;
};

export function Card({ infos }: cardProps) {
  const router = useRouter(); // Hook para navegação
  const { name, price, tag, category, color, id } = infos;
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => router.push(`./product/${id}`)}
    >
      {/* <View style={styles.cardContainer}> */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/camisaNike.png")}
          style={styles.image}
        />
      </View>
      <View style={{ padding: 5 }}>
        <View>
          <ThemedText style={styles.title}>{name} dddddd</ThemedText>
          <ThemedText style={styles.title}>{tag}</ThemedText>
        </View>
        <View style={styles.detailsGroup}>
          <ThemedText style={styles.details}>{category}</ThemedText>
          <ThemedText style={styles.details}>{color}</ThemedText>
        </View>
        <ThemedText style={styles.price}>
          R$ {price} <ThemedText style={styles.pix}>no Pix</ThemedText>
        </ThemedText>
      </View>
      {/* </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    width: "45%",
    height: 380,
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
    fontWeight: "bold",
    fontSize: 16,
  },
  detailsGroup: {
    marginVertical: 8,
  },
  details: {
    fontSize: 13,
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
