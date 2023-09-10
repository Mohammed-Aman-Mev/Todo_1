const Input2 = ({ setAmount, amount }) => {
  return (
    <input
      type="Number"
      placeholder="Enter Amount Here"
      onChange={(e) => setAmount(e.target.value)}
      value={amount}
    />
  );
};

export default Input2;
