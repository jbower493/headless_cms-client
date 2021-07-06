import Button from 'components/Button';

export const TextField = ({ field, form, ...rest }) => {
  
  return (
    <div className={`formFieldGroup`}>
      <label htmlFor={field.name}>{rest.label}</label>
      <input type="text" id={field.name} {...field} {...rest} />
    </div>
  )
};

export const PasswordField = ({ field, form, ...rest }) => {
  
  return (
    <div className={`formFieldGroup`}>
      <label htmlFor={field.name}>{rest.label}</label>
      <input type="password" id={field.name} {...field} {...rest} />
    </div>
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