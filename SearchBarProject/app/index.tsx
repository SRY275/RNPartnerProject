import { StyleSheet, Text, View } from "react-native";
import Search from "./components/Search";
export default function Index() {
  return (
    <View >
      <Search />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    searchStyle: {
        width: 30,
        height: 50,
    },
})
