import { Stack } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function ProductLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: ""
        }}
      />
      <Stack.Screen
        name="otherReviews"
        options={{
          headerShown: true,
          headerBackTitle: "teste",
          headerShadowVisible: false,
          headerTitle: ""
        }}
      />
    </Stack>
  );
}
