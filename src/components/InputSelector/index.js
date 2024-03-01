import "./index.scss";

const InputSelector = ({ handleChange, labelText, optionValue }) => {
  return (
    <>
      <div className="input-selector-container">
        <label>{labelText}</label>
        <select onChange={handleChange} isClearable={false}>
          {optionValue.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default InputSelector;
