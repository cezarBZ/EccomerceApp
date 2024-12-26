import CartItem from "@/components/CartItem";
import { useShoppingCartStore } from "@/stores/shoppingCartStore";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import EmptyShoppingCart from "./_emptyShoppingCart";

const shoppingCart = () => {
  const { items, totalPrice } = useShoppingCartStore();
  const isCartEmpty = items.length < 1;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Meu carrinho</Text>

      {isCartEmpty ? (
        <EmptyShoppingCart />
      ) : (
        <>
          <FlatList
            data={items}
            contentContainerStyle={
              isCartEmpty && {
                backgroundColor: "purple",
                height: "100%",
                padding: 20,
                alignItems: "center",
                justifyContent: "center",
              }
            }
            renderItem={(item) => (
              <CartItem product={item.item} key={item.index} />
            )}
          />
          <View style={styles.infosContainer}>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 400 }}>
                Calcule o frete
              </Text>
              <TextInput
                mode="outlined"
                placeholder="Digite o seu CEP"
                style={{
                  height: 40,
                  display: "flex",
                  width: 265,
                  marginLeft: "auto",
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 400 }}>Cupom</Text>
              <TextInput
                mode="outlined"
                placeholder="Insira um cupom de desconto"
                style={{
                  height: 40,
                  display: "flex",
                  width: 265,
                  marginLeft: "auto",
                }}
              />
            </View>
            <Text style={styles.total}>Total: R$ {totalPrice}</Text>
            <Button
              mode="contained"
              style={{
                width: "50%",
                alignSelf: "center",
                backgroundColor: "black",
              }}
            >
              Continuar compra
            </Button>
          </View>
        </>
      )}
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
    paddingVertical: 15,
    backgroundColor: "white",
  },
  total: {
    fontSize: 18,
    fontWeight: 500,
    marginVertical: 20,
    textAlign: "right",
  },
});
export default shoppingCart;
