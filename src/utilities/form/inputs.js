import React, { useState } from 'react';

import Button from 'components/Button';
import RequestLoader from 'components/Loaders/RequestLoader';

import { downArrow } from '../icons';

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

export const SelectField = ({ field, form, label, className, options, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { errors, touched, setFieldValue } = form;
  const { name, value } = field;

  const isError = errors[name] && touched[name];

  const currentValueLabel = value ? options.find(option => option.value === value).label : 'Please Select';
  
  return (
    <div className={`form__group form__group--select`}>
      <input type="hidden" className={`form__hidden${getClassName(className, isError)}`} id={name} {...field} {...rest} />
      <label htmlFor={name}>{label}</label>
      <div
        className={`form__select${isOpen ? ' form__select--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentValueLabel}
        <i className={`form__selectArrow ${downArrow}`} />
      </div>
      {
        isOpen &&
          <ul className={`form__selectList`}>
            {
              options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setFieldValue(name, option.value)
                    setIsOpen(!isOpen);
                  }}
                  className={`form__selectOption${value === option.value ? ' form__selectOption--selected' : ''}`}
                >
                  {option.label}
                </li>
              ))
            }
          </ul>
      }
      {
        isError &&
          <div className={`form__error`}>{errors[name]}</div>
      }
    </div>
  );
}

export const SubmitButton = ({ text, color, loading, disabled }) => {
  return loading
    ? <div className={`ButtonLoader`}>
      <RequestLoader size={`sm`} />
    </div>
    : <Button 
        type="submit"
        text={text}
        style="solid"
        color={color}
        disabled={disabled} />
};