import Button from 'components/Button';

export const TextField = ({ label, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...rest} />
    </>
  )
};

export const PasswordField = ({ label, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="password" id={id} {...rest} />
    </>
  );
};

export const SubmitButton = ({ valid, text, style, color }) => {
  return (
    <Button 
      type="submit"
      text={text}
      style={style}
      color={color} />
  );
};