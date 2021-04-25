import "./App.css";
import ListCategories from "./components/ListCategories/ListCategories";
import AddCategory from "./components/SectionForAddCategory/AddCategory";
import { GlobalProvider } from "./context/context";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="add-category">
          <AddCategory />
        </div>
        <div className="add-category">
          <ListCategories />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
