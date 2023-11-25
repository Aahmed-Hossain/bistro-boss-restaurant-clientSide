import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51OGC6bLgdKhl0Qn16W7oWhVwqMSwDQG3YgWEL3LJMnpZbEdKzXGeyEnYJvp9TMCSy1UfTKCeP4z23syvQ2jmruAP00LbZpQqQx');

const Payment = () => {
    return (
        <div>
            <SectionTitle title={"make payment"} heading={"Please Pay"}></SectionTitle>
            <div>
            <Elements stripe={stripePromise} >
    <CheckoutForm/>
  </Elements>

            </div>
        </div>
    );
};

export default Payment;