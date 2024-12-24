import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "../redux/Slice/Cart";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarts());
  }, []);
  const { carts, isLoading } = useSelector((store) => store.carts);
  console.log("carts", carts);

  return <div>Cart</div>;
};

export default Cart;
