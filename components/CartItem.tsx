import { IProduct } from "@/interfaces/product";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import CartItemCounter from "./CartItemCounter";
import TrashIcon from "@/icons/TrashIcon";

type cartItemProps = {
  product: IProduct;
};

const CartItem = ({ product }: cartItemProps) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/images/camisaNike.png")}
        style={styles.image}
      />
    </View>
    <View style={{flex: 1}}>
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CartItemCounter />
        <TrashIcon />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 25,
  },
  imageContainer: {
    padding: 5,
    height: 150,
    width: 150,
    marginBottom: 5,
  },
  image: {
    borderRadius: 10,
    width: "auto",
    height: "100%",
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
  },

  price: {
    fontSize: 16,
    fontWeight: 600,
    color: "grey",
    marginVertical: 10,
  },
  buttonsContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 10
  },
});

export default CartItem;
