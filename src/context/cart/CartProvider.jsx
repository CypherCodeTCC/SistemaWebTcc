import axios from "axios";
import CartContext from "./CartContext";
import { useState, useEffect } from "react";

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("https://node-routes-mysql.vercel.app/book");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const defaultCart = getDefaultCart(items);
      setCartItems(defaultCart);
    }
  }, [items]);

  //METODO PARA QUE O INDICE DE CADA PRODUTO SEJA INDIVIDUAL
  const getDefaultCart = () => {
    let cart = {};
    items.forEach((item) => {
      cart[item.id] = 0;
    });

    return cart;
  };

  //METODO PARA SOMAR OS VALORES DOS ITENS NO CARRINHO
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    /*
       SE HOUVER UM ITEM NO CARRINHO, ELE VÊ QUANDO ITENS DAQUELE PRODUTO ESPECIFICO TEM 
       E MULTIPLICA ISSO PELO SEU VALOR
    */
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = items.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  //METODO PARA ADICIONAR NO CARRINHO
  const addToCart = (itemId) => {
    if (!isNaN(itemId)) {
      // Verifica se itemId é um número válido
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Metodo para remover do carrinho
  const removeFromCart = (itemId) => {
    if (!isNaN(itemId)) {
      // Verifica se itemId é um número válido
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };
  //METODO PARA DIMINUIR E AUMENTAR A QUANTIDADE DE ITENS NO CARRINHO
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValues = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}
