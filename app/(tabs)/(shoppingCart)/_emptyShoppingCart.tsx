import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import DollShoppingCart from "@/icons/DollShoppingCart";
import { Button } from "react-native-paper";

const EmptyShoppingCart = () => {
  const router = useRouter();
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DollShoppingCart />
      <Text style={{ textAlign: "center", fontSize: 22, fontWeight: 500 }}>
        Seu carrinho está vazio
      </Text>
      <Text style={{ textAlign: "center", fontSize: 16 }}>
        Adicione produtos ao seu carrinho para vê-los aqui
      </Text>
      <Button
        mode="contained"
        style={{ marginTop: 50, backgroundColor: "black" }}
        onPress={() => router.push(`./`)}
      >
        Buscar produtos
      </Button>
    </View>
  );
};

export default EmptyShoppingCart;
