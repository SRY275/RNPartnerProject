import { Text, View } from "react-native";
import Search from "./components/Search";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Search />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
