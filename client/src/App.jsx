import { Routes, Route } from "react-router-dom";
import { useState } from "react";
//pages
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import Desserts from "./pages/Desserts";
import Story from "./pages/Stroy";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import AddProduct from "./pages/AddProduct";
import CakeDetail from "./pages/CakeDetail";
import CakeEdit from "./pages/CakeEdit";

//auth
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/auth/Dashboard";
import PrivateRoutes from "./components/layout/PrivateRoute";

//components
import Layout from "./components/layout/Layout";
function App() {
  // APP-LEVEL STATE
  const [cartProducts, setCartProducts] = useState([]);
  // PRODUCT-CART FUNCTION: SAVE NEW ITEM TO CART FROM DETAILS
  function addNewProductToCart(newCartProduct) {
    // EXISTING PRODUCT ADDED WITH NEW QUANTITY
    const duplicateCartProduct = cartProducts.filter(
      (product) => product.id == newCartProduct.id
    );
    // LOOP OUR PRODUCTS IN CART & UPDATE PROPERTIES FOR NEW CART PRODUCTS (quant & price)
    if (duplicateCartProduct.length > 0) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === duplicateCartProduct[0].id
            ? {
                ...product,
                quantity: product.quantity + newCartProduct.quantity,
                totalPrice: product.totalPrice + newCartProduct.totalPrice,
              }
            : product
        )
      );
      // UNIQUE PRODUCT ADDED TO CART
      // THEORY - "UPDATER FUNCTION": Passing a function to state setter, provides access to the previous state value as a parameter, rather than passing the new state
      // DOCS: https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    } else {
      setCartProducts((currentProducts) => {
        return [...currentProducts, newCartProduct];
      });
    }
  }
  //把删除 function 一级一级传给 <ProductCartItem>,然后在子组件中执行function
  function handleRemove(productId) {
    setCartProducts((currentProducts) =>
      //通过 product.id !== productId 的条件，过滤掉具有指定 productId 的产品。这意味着从购物车中移除了具有该ID的产品
      currentProducts.filter((product) => product.id !== productId)
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout cartProducts={cartProducts} handleRemove={handleRemove} />
        }
      >
        {/* pages */}
        <Route path="/" element={<Home />} />

        <Route path="/cakes" element={<Cakes />} />
        <Route
          path="/cakes/:id"
          element={<CakeDetail addNewProductToCart={addNewProductToCart} />}
        />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/story" element={<Story />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/cakes/edit/:id" element={<CakeEdit />} />
        </Route>

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
