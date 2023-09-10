import { useEffect, useState } from "react";
import Input1 from "./Input1";
import Input2 from "./Input2";
import Sbtn from "./Sbtn";

const Form = ({ saveTodo, editData, update }) => {
  const [expance, setExpance] = useState("");
  const [amount, setAmount] = useState("");

  const show = (e) => {
    e.preventDefault();
    if (editData.is_edit === true) {
      update(editData.text.id, expance, amount);
    } else {
      saveTodo(expance, amount);
    }
    setExpance("");
    setAmount("");
  };

  useEffect(() => {
    setExpance(editData.text.expance);
    setAmount(editData.text.amount);
  }, [editData]);

  return (
    <form onSubmit={(e) => show(e)}>
      <Input1 expance={expance} setExpance={setExpance} />
      <Input2 amount={amount} setAmount={setAmount} />
      <Sbtn />
    </form>
  );
};

export default Form;
