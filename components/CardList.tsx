import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "./Card";
import { productsMock } from "@/mocks/productMock";

export function CardList() {
  return (
    <View style={styles.container}>
      <Card infos={productsMock[0]} />
      <Card infos={productsMock[1]} />
      <Card infos={productsMock[2]} />
      <Card infos={productsMock[3]} />
      <Card infos={productsMock[4]} />
      <Card infos={productsMock[5]} />
      <Card infos={productsMock[6]} />
      <Card infos={productsMock[7]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    columnGap: 8,
    rowGap: 30,
  },
});
