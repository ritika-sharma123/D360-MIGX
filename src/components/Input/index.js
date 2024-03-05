import "./index.scss";
const Input = ({ labelText, inputType, handeChane,reference }) => {
  return (
    <>
      <div className="input-container">
        <label>{labelText}</label>
        <input type={inputType} onChange={handeChane} {...reference}></input>
      </div>
    </>
  );
};

export default Input;
