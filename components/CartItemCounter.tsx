import { useShoppingCartStore } from "@/stores/shoppingCartStore";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useShallow } from "zustand/react/shallow";
interface cartItemCounterProps {
  itemQuantity: number;
  itemId: number;
}
const CartItemCounter = ({ itemQuantity, itemId }: cartItemCounterProps) => {
  const increaseQuantity = useShoppingCartStore(
    useShallow((state) => state.increaseQuantity)
  );
  const decreaseQuantity = useShoppingCartStore(
    useShallow((state) => state.decreaseQuantity)
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => decreaseQuantity(itemId)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{itemQuantity}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => increaseQuantity(itemId)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    borderColor: "grey",
    width: 25,
    borderWidth: 1,
  },

  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },

  counter: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default CartItemCounter;
