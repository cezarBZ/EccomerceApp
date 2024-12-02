import { ThemedText } from "@/components/ThemedText";
import FavoriteIcon from "@/icons/FavoriteIcon";
import { IProduct } from "@/interfaces/product";
import { productsMock } from "@/mocks/productMock";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<IProduct | undefined>();

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (!Array.isArray(id)) {
      const product = productsMock.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(product);
    }
  }, [id]);

  return (
    <ScrollView ref={scrollViewRef}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/camisaNike.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <View
          style={{
            flexDirection: "row",
            // alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            width: "100%",
            // flex: 1,
            display: "flex",
          }}
        >
          <ThemedText style={styles.title}>{product?.name}</ThemedText>
          <View
            style={{
              // flex: 1,
              alignItems: "flex-end",
            }}
          >
            <FavoriteIcon width={23} height={23} />
          </View>
        </View>
        <ThemedText style={styles.price}>
          R$ {product?.price.toFixed(2)}
        </ThemedText>

        <ThemedText style={styles.description}>
          {product?.description} Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Omnis atque, tempora exercitationem error, illum ut
          enim impedit quos iusto quis,
        </ThemedText>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={{ ...styles.buttons, ...styles.buyButton }}>
          <Text style={{ ...styles.buttonText, color: "white" }}>
            Comprar agora
          </Text>
        </Pressable>
        <Pressable style={{ ...styles.buttons, ...styles.addToCart }}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 500,
  },
  price: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 22,
    flex: 1,
    fontWeight: "bold",
    fontFamily: "sans",
  },
  description: {
    lineHeight: 20,
    marginVertical: 10,
    textAlign: "justify",
  },
  details: {
    padding: 25,
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    verticalAlign: "bottom",
  },
  buttons: {
    width: 350,
    padding: 10,
  },
  addToCart: {
    borderColor: "black",
    borderWidth: 1,
  },
  buyButton: {
    backgroundColor: "black",
    color: "red",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
  },
});
export default ProductScreen;
