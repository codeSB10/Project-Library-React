import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { books } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function quantityChange(value, item) {
    setCart(
      cart.map((book) =>
        book.id === item.id ? { ...book, quantity: value } : book
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  function totals() {
    let total = 0;
    cart.forEach(
      (book) =>
        (total += (book.salePrice || book.originalPrice) * book.quantity)
    );
    return { subtotal: total * 0.9, tax: total * 0.1, total: total };
  }

  function cartLength() {
    let n = 0;
    cart.forEach((book) => (n += +book.quantity));
    return n;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav length={cartLength()} />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route
              path="/books/:id"
              element={
                <BookInfo books={books} cart={cart} addToCart={addToCart} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  quantityChange={quantityChange}
                  removeItem={removeItem}
                  totals={totals()}
                />
              }
            />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
