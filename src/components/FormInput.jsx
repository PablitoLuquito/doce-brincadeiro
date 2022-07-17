const FormInput = (props) => {
  return (
    <>
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default FormInput;
