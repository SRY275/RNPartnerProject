import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
    />
  );
};

export default Search;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: '#eee',
    borderRadius: 20,
    height: 40,
  },
  input: {
    color: '#333',
    fontSize: 16,
  },
})