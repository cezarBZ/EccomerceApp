import CartItem from "@/components/CartItem";
import { useShoppingCartStore } from "@/stores/shoppingCartStore";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const shoppingCart = () => {
  const { items } = useShoppingCartStore();
  return (
    <SafeAreaView style={{ padding: 20, flex: 1 }}>
      <Text style={styles.title}>Meu carrinho</Text>
      <FlatList
        data={items}
        renderItem={(item) => <CartItem product={item.item} key={item.index} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
});
export default shoppingCart;
