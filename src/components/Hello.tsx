import { FC } from "react";
import { View, Text, StyleSheet, type TextStyle } from "react-native";

type Props = { children: string; bang?: boolean; style?: TextStyle };

const Hello: FC<Props> = ({ children, bang, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang === true ? "!" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
