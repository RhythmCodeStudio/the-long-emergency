
import { AddressElement } from "@stripe/react-stripe-js";

const AddressForm = () => {

  return (
    <form className="m-6 text-black text-center">
      <h3>Shipping</h3>
      <AddressElement
        options={{
          mode: "shipping",
          allowedCountries: ["US"],
          autocomplete: { mode: "automatic" },
        }}
      />
    </form>
  );
};

export default AddressForm;
