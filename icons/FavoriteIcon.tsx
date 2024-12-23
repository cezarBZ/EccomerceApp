import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";

interface iconProps extends SvgProps {
  isFavorite?: boolean;
}

const FavoriteIcon = (props: iconProps) => {
  const colorScheme = useColorScheme();
  const [isFavorite, setisFavorite] = useState<boolean>();

  const handleOnPress = () => {
    setisFavorite(!isFavorite);
  };

  useEffect(() => {
    setisFavorite(props.isFavorite);
  }, [props.isFavorite]);

  return isFavorite ? (
    <Pressable onPress={handleOnPress}>
      <Svg viewBox="0 0 1920 1920" {...props} fill={"red"}>
        <Path
          fillRule="evenodd"
          d="M1771.731 291.037C1675.709 193.659 1547.944 140 1411.818 140h-.113c-136.125 0-263.777 53.66-359.573 150.924-37.618 38.07-68.571 80.997-92.294 127.426-23.61-46.429-54.563-89.356-92.068-127.313C771.86 193.659 644.208 140 507.97 140h-.113c-136.012 0-263.777 53.66-359.8 151.037-197.691 200.629-197.691 527.103 1.695 729.088l810.086 760.154 811.893-761.736c197.692-200.403 197.692-526.877 0-727.506"
        />
      </Svg>
    </Pressable>
  ) : (
    <Pressable onPress={handleOnPress}>
      <Svg
        width={64}
        height={64}
        viewBox="0 0 1920 1920"
        {...props}
        fill={Colors[colorScheme ?? "light"].tabIconSelected}
      >
        <Path
          fillRule="evenodd"
          d="m1692.48 910.647-732.762 687.36-731.182-685.779c-154.616-156.875-154.616-412.122 0-568.997 74.542-75.558 173.704-117.233 279.304-117.233h.113c105.487 0 204.65 41.675 279.078 117.233l.113.113c74.767 75.783 116.103 176.865 116.103 284.385h112.941c0-107.52 41.224-208.602 116.104-284.498 74.428-75.558 173.59-117.233 279.19-117.233h.113c105.487 0 204.763 41.675 279.19 117.233 154.617 156.875 154.617 412.122 1.695 567.416m78.833-646.701c-95.887-97.355-223.737-150.89-359.718-150.89h-.113c-136.094 0-263.83 53.535-359.604 150.777-37.61 38.061-68.443 80.979-92.16 127.398-23.718-46.42-54.664-89.337-92.16-127.285-95.774-97.355-223.51-150.89-359.605-150.89h-.113c-135.981 0-263.83 53.535-359.83 150.89-197.648 200.696-197.648 526.983 1.694 729.035l810.014 759.868L1771.313 991.4c197.647-200.47 197.647-526.758 0-727.454"
        />
      </Svg>
    </Pressable>
  );
};

export default FavoriteIcon;
