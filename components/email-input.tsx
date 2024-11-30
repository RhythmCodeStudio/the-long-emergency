import {useCustomCheckout, 

} from '@stripe/react-stripe-js';

const EmailInput = () => {
  const checkout = useCustomCheckout();
  const looksValid = checkout.email && /^\S+@\S+\.\S+$/.test(checkout.email);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => checkout.updateEmail(e.target.value);
  return (
    <input
      type="text"
      className={looksValid ? '' : 'invalid'}
      value={checkout.email || ''}
      onChange={handleChange}
    />
  );
};

export default EmailInput;