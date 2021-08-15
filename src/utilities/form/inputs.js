import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import Button from 'components/Buttons/Button';
import DisabledButton from 'components/Buttons/DisabledButton';
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

export const SelectField = ({ field, form, label, className, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { errors, touched, setFieldValue, setFieldTouched } = form;
  const { name, value } = field;

  const isError = errors[name] && touched[name];

  const currentValueLabel = value ? options.find(option => option.value === value).label : 'Please Select';
  
  // Render a hidden select field so there is actually an input there, visible select field is the 'ul'
  return (
    <div className={`form__group form__group--select`}>
      <select
        className={`form__hidden${getClassName(className, isError)}`}
        id={name}
        name={name}
      >
        {
          options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)
        }
      </select>
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
          <ClickAwayListener onClickAway={() => setIsOpen(false)} >
            <ul className={`form__selectList`}>
              {
                options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setFieldTouched(name, true);
                      setFieldValue(name, option.value);
                      setIsOpen(!isOpen);
                    }}
                    className={`form__selectOption${value === option.value ? ' form__selectOption--selected' : ''}`}
                  >
                    {option.label}
                  </li>
                ))
              }
            </ul>
          </ClickAwayListener>
      }
      {
        isError &&
          <div className={`form__error`}>{errors[name]}</div>
      }
    </div>
  );
}

export const renderSubmitButton = (status, touched, valid, text, color) => {
  if (status === 'loading') return <div className={`ButtonLoader`}><RequestLoader size={`sm`} /></div>;
  else if (Object.keys(touched).length === 0 || !valid) return <DisabledButton text={text} />
  return <Button 
    type="submit"
    text={text}
    buttonStyle="solid"
    color={color} />
};