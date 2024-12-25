import { useShoppingCartStore } from "@/stores/shoppingCartStore";
import * as React from "react";
import { Pressable } from "react-native";
import Svg, { G, Path, SvgProps } from "react-native-svg";
interface buttonProps extends SvgProps {
  itemId: number;
}

const TrashButton = (props: buttonProps) => {
  const deleteItem = useShoppingCartStore((state) => state.removeItem);

  return (
    <Pressable onPress={() => deleteItem(props.itemId)}>
      <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <G stroke="#1C274C" strokeWidth={1.5}>
          <Path
            strokeLinecap="round"
            d="M20.5 6h-17M18.833 8.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81-.865-.809-.954-2.136-1.13-4.79l-.46-6.9"
          />
          <Path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6" />
        </G>
      </Svg>
    </Pressable>
  );
};
export default TrashButton;
