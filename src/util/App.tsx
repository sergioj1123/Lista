import { Provider } from "react-redux";
import Home from "../pages/home";
import GlobalStyle from "../styles";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Home></Home>
    </Provider>
  );
}

export default App;
