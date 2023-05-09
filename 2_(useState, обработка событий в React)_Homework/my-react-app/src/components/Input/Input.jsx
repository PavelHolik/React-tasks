import "./Input.css";
export const Input = (props) => {
     return <input
     value={props.value}
     onChange={props.onChange}
      placeholder={props.placeholder} 
      />
  };