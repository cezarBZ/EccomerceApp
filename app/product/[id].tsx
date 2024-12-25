import { Collapsible } from "@/components/Collapsible";
import Divider from "@/components/Divider";
import Rating from "@/components/Rating";
import { ThemedText } from "@/components/ThemedText";
import FavoriteIcon from "@/icons/FavoriteIcon";
import { IProduct } from "@/interfaces/product";
import { productsMock } from "@/mocks/productMock";
import { reviewMock } from "@/mocks/reviewMock";
import { useShoppingCartStore } from "@/stores/shoppingCartStore";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  findNodeHandle,
  Image,
  LayoutAnimation,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<IProduct | undefined>();
  const mainReviews = reviewMock.slice(0, 5);
  const reviewLength = reviewMock.length;

  const scrollViewRef = useRef<ScrollView>(null);
  const collapsibleRef = useRef<View>(null);
  const router = useRouter(); // Hook para navegação
  const { addItem } = useShoppingCartStore();

  const handleOpenReview = async () => {
    collapsibleRef.current?.measureInWindow((x, y, width, height) => {
      scrollViewRef.current?.scrollTo({ y: y / 3, animated: true });
    });
  };

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
        <Pressable
          style={{ ...styles.buttons, ...styles.addToCart }}
          onPress={() => addItem(product)}
        >
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </Pressable>
      </View>
      <Divider width={3} color="white" dividerStyle={{ marginTop: 22 }} />

      <View style={{ flex: 1, padding: 25 }}>
        <Collapsible
          title={`Avaliações (${reviewLength})`}
          onTouch={handleOpenReview}
          referencia={collapsibleRef}
        >
          <View style={{ display: "flex", gap: 15 }}>
            {mainReviews.map((review, index) => (
              <React.Fragment key={index}>
                <Rating review={review} />
                <Divider color="#bebebe" dividerStyle={{ marginTop: 3 }} />
              </React.Fragment>
            ))}
            <TouchableOpacity>
              <Pressable
                onPress={() => router.push(`/product/allReviews`)}
                style={{
                  alignSelf: "flex-start",
                  padding: 10,
                  borderWidth: 2,
                  borderColor: "#8b8b8b94",
                  borderRadius: 7,
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontWeight: "500" }}>
                  Ver todas as avaliações
                </Text>
              </Pressable>
            </TouchableOpacity>
          </View>
        </Collapsible>
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
