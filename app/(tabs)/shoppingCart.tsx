import CartItem from "@/components/CartItem";
import { useShoppingCartStore } from "@/stores/shoppingCartStore";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const shoppingCart = () => {
  const { items, totalPrice } = useShoppingCartStore();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Meu carrinho</Text>
      <FlatList
        data={items}
        renderItem={(item) => <CartItem product={item.item} key={item.index} />}
        // showsVerticalScrollIndicator={false}
      />
      <View style={styles.infosContainer}>
        <Text style={styles.total}>Total: R$ {totalPrice}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    padding: 15,
  },
  infosContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 500,
  },
});
export default shoppingCart;
