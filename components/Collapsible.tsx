import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export function Collapsible({
  children,
  title,
  onTouch,
  referencia,
}: PropsWithChildren & {
  title: string;
  onTouch?: () => void;
  referencia?: React.LegacyRef<View>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <View onTouchEnd={onTouch} ref={referencia}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <IconSymbol
          name="chevron.right"
          size={30}
          weight="bold"
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          style={{
            transform: [{ rotate: isOpen ? "270deg" : "90deg" }],
            marginLeft: "auto",
          }}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.content} onTouchEnd={(e) => e.stopPropagation()}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    paddingTop: 20,
  },
});
