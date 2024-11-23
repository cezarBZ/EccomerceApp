import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Card } from "./Card";

export function CardList() {
  return (
    <View style={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 8,
  },
});
