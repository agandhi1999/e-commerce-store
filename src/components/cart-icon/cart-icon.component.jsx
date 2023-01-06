import { setIsCartOpen } from '../../store/cart/cart.action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    
    const dispatch = useDispatch()
    return (
        <CartIconContainer onClick={() => {dispatch(setIsCartOpen(!isCartOpen))}}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;