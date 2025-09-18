import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

const DATA = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

export default function SearchableList() {
  const [query, setQuery] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(DATA); // ✅ show full list first

  const onChangeSearch = (text: string) => {
    setQuery(text);
    if (text.trim() === "") {
      setFilteredData(DATA); // reset to full list
    } else {
      const results = DATA.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(results);
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search fruits..."
        onChangeText={onChangeSearch}
        value={query}
        style={styles.searchbar}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,             // ✅ ensures list fills screen
    padding: 16,
    backgroundColor: "#fff",
  },
  searchbar: {
    marginBottom: 12,
    borderRadius: 12,
  },
  item: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
