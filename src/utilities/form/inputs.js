import Button from 'components/Button';
import RequestLoader from 'components/Loaders/RequestLoader';

const getClassName = (className, error) => {
  return `${className ? ' ' + className : ''}${error ? ' form__input--error' : ''}`;
};

export const TextField = ({ field, form, label, className, ...rest }) => {
  const { errors, touched } = form;
  const { name } = field;

  const isError = errors[name] && touched[name];

  return (
    <div className={`form__group`}>
      <label htmlFor={name}>{label}</label>
      <input className={`form__input${getClassName(className, isError)}`} type="text" id={name} {...field} {...rest} />
      {
        isError &&
          <div className={`form__error`}>{errors[name]}</div>
      }
    </div>
  )
};

export const PasswordField = ({ field, form, label, className, ...rest }) => {
  const { errors, touched } = form;
  const { name } = field;

  const isError = errors[name] && touched[name];

  return (
    <div className={`form__group`}>
      <label htmlFor={name}>{label}</label>
      <input className={`form__password${getClassName(className, isError)}`} type="password" id={name} {...field} {...rest} />
      {
        isError &&
          <div className={`form__error`}>{errors[name]}</div>
      }
    </div>
  );
};

export const SelectField = (props) => {

  console.log(props)

  return (
    <input />
  );
}

export const SubmitButton = ({ text, style, color, loading, disabled }) => {
  return loading
    ? <div className={`ButtonLoader`}>
      <RequestLoader size={`sm`} />
    </div>
    : <Button 
        type="submit"
        text={text}
        style={style}
        color={color}
        disabled={disabled} />
};