import React from "react";
import { Pressable } from "react-native";

interface PropTypes {
  children: React.JSX.Element;
  onPressUp: Function;
  href: string;
}

const LinkPressable = ({
  onPressUp,
  href,
  children,
}: PropTypes): React.JSX.Element => {
  return <Pressable onPress={() => onPressUp()}>{children}</Pressable>;
};

export default LinkPressable;
