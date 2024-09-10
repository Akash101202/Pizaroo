import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { itemDecrease, itemIncrease } from "./cartSlice";

function CartItemQuatity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(itemDecrease(pizzaId))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(itemIncrease(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default CartItemQuatity;
