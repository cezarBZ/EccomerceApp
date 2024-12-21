import { Stack } from "expo-router";

export default function ProductLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="allReviews"
        options={{
          headerShown: true,
          headerBackTitle: "teste",
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
    </Stack>
  );
}
