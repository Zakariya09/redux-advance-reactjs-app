import { uiAction } from "./ui-slice";
import { cartAction } from "./cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "sending",
        title: "Sending",
        message: "Sending Data...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-103fe-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something Went wrong!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully...",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sent cart data failed...",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-103fe-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
    //   dispatch(cartAction.replaceCart(cartData));

      //Bellow code on if undefined array error on find()
        dispatch(
          cartAction.replaceCart({
            items: cartData.items || [],
      totalQuantity: cartData.totalQuantity
          })
        );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sent cart data failed...",
        })
      );
    }
  };
};
