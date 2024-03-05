import "./index.scss";
const Input = ({ labelText, inputType, handeChane }) => {
  return (
    <>
      <div className="input-container">
        <label>{labelText}</label>
        <input type={inputType} onChange={handeChane}></input>
      </div>
    </>
  );
};

export default Input;
