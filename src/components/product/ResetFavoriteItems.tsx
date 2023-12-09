import { resetFavoriteData } from "@/store/nextSlice";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
// Using this component, you can completely delete favorites
const ResetFavoriteItems = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confirmReset) {
      dispatch(resetFavoriteData());
    }
  };
  return (
    <Button onClick={handleResetCart} variant={"reset"} size={"rs"}>
      reset cart
    </Button>
  );
};

export default ResetFavoriteItems;
