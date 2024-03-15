import Body from "./components/Body";
import { Provider } from "react-redux";
import { appStore } from "./store/store";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <Toaster position="top-right" />
    </Provider>
  );
}

export default App;
