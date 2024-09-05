import React from "react";
import { Pressable } from "react-native";

interface PropTypes {
  onPressUp: Function;
  href: string;
}

const LinkPressable = ({
  onPressUp,
  href,
  children,
}: PropTypes): React.JSX.Element => {
  return <Pressable>{children}</Pressable>;
};

export default LinkPressable;
