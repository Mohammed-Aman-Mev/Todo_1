const Input1 = ({ setExpance, expance }) => {
  return (
    <input
      type="text"
      placeholder="Enter Expance Here"
      onChange={(e) => setExpance(e.target.value)}
      value={expance}
    />
  );
};

export default Input1;
