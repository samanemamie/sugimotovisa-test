import { resetCart } from "@/store/nextSlice";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <Button onClick={handleResetCart} variant={"reset"} size={"rs"}>
      reset cart
    </Button>
  );
};

export default ResetCart;
