import { Link } from "expo-router";
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
  return (
    <Link href={href}>
      <Pressable onPress={() => onPressUp()}>{children}</Pressable>
    </Link>
  );
};

export default LinkPressable;
