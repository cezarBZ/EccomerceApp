import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CartItemCounter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>1</Text>
      <TouchableOpacity style={styles.button}>
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
