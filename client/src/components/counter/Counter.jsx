import CusButton from "../button/CusButton";

function Counter(props) {
  const { count, setCount } = props;
  function handleIncrement(e) {
    e.preventDefault();
    setCount(count + 1);
  }
  function handleDecrement(e) {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <CusButton onClick={handleDecrement}>-</CusButton>
      <span>{count}</span>
      <CusButton onClick={handleIncrement}>+</CusButton>
    </div>
  );
}

export default Counter;
