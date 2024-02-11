import { Provider } from "react-redux";
import Home from "../pages/home";
import GlobalStyle from "../styles";
import store from "../store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewContact from "../pages/newContact";

const routes = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "new", element: <NewContact></NewContact> },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  );
}

export default App;
