import { loadStripe } from "@stripe/stripe-js";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
// import useCart from "../../hooks/useCart";
import CheckoutForm from "./CheckOutForm";
import useCart from "../../hooks/useCart";
// import useCart from "../../../hooks/useCart";
// import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe('pk_test_51NGxAaKvauBt0pV550XZCagRx7zX7xbbRvMY8SeiRkuc9J4pFPVy8fSzjGbMUlW7wj4kHF6ks93MqS8ZRXMNslC700olrSnBPd');
console.log(stripePromise);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2))


  return (
    <div>
          
            <h2 className="text-3xl mb-8"> Payment here </h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm   cart={cart} price={price} ></CheckoutForm>
            </Elements>
        </div>
  );
};

export default Payment;