import { Provider as PaperProvider } from "react-native-paper";
import SearchableList from "./components/Search";

export default function App() {
  return (
    <PaperProvider>
      <SearchableList />
    </PaperProvider>
  );
}