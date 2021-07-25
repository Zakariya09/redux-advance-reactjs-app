import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
 const cartQuantity =  useSelector(state => state.cart.totalQuantity)

  const showCartModalHandler =()=>{
    dispatch(uiAction.showCartModal())
  }
  return (
    <button className={classes.button} onClick ={showCartModalHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
