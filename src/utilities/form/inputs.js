import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { getIn } from 'formik';

import Button from 'components/Buttons/Button';
import DisabledButton from 'components/Buttons/DisabledButton';
import RequestLoader from 'components/Loaders/RequestLoader';

import { downArrow } from '../icons';

const getClassName = (className, error) => {
  return `${className ? ' ' + className : ''}${error ? ' form__input--error' : ''}`;
};

export const TextField = ({ field, form, label, embedded, className, ...rest }) => {
  const { errors, touched } = form;
  const { name } = field;
  
  const error = () => {
    if (errors[name] && touched[name]) return errors[name];
    const fieldArrayError = getIn(errors, name);
    if (fieldArrayError) return fieldArrayError;
    return null;
  }

  return (
    <div className={`form__group${embedded ? ' form__group--embedded' : ''}`}>
      {!embedded && <label htmlFor={name}>{label}</label>}
      <input className={`form__input${getClassName(className, error())}`} type="text" id={name} {...field} {...rest} />
      {
        error() &&
        <div className={`form__error`}>{error()}</div>
      }
    </div>
  )
};

export const PasswordField = ({ field, form, label, className, ...rest }) => {
  const { errors, touched } = form;
  const { name } = field;

  const error = () => {
    if (errors[name] && touched[name]) return errors[name];
    const fieldArrayError = getIn(errors, name);
    if (fieldArrayError) return fieldArrayError;
    return null;
  }

  return (
    <div className={`form__group`}>
      <label htmlFor={name}>{label}</label>
      <input className={`form__password${getClassName(className, error())}`} type="password" id={name} {...field} {...rest} />
      {
        error() &&
        <div className={`form__error`}>{errors[name]}</div>
      }
    </div>
  );
};

export const SelectField = ({ field, form, label, embedded, className, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { errors, touched, setFieldValue, setFieldTouched } = form;
  const { name, value } = field;

  const error = () => {
    if (errors[name] && touched[name]) return errors[name];
    const fieldArrayError = getIn(errors, name);
    if (fieldArrayError) return fieldArrayError;
    return null;
  }

  const currentValueLabel = value ? options.find(option => option.value === value).label : 'Please Select';

  // Render a hidden select field so there is actually an input there, visible select field is the 'ul'
  return (
    <div className={`form__group form__group--select${embedded ? ' form__group--embedded' : ''}`}>
      <select
        className={`form__hidden${getClassName(className, error())}`}
        id={name}
        name={name}
      >
        {
          options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)
        }
      </select>
      {!embedded && <label htmlFor={name}>{label}</label>}
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
        error() &&
        <div className={`form__error`}>{errors[name]}</div>
      }
    </div>
  );
}

export const CheckboxField = ({ field, form, label, embedded, controlled, className, ...rest }) => {
  const { errors, touched, setFieldValue, setFieldTouched } = form;
  const { name, value } = field;

  const error = () => {
    if (errors[name] && touched[name]) return errors[name];
    const fieldArrayError = getIn(errors, name);
    if (fieldArrayError) return fieldArrayError;
    return null;
  }

  return (
    <div
      onClick={() => {
        setFieldTouched(name, true);
        setFieldValue(name, !value);
      }}
      className={`form__group form__group--checkbox${embedded ? ' form__group--embedded' : ''}`}
    >
      <input className={`form__hidden`} type="checkbox" id={name} {...field} {...rest} />
      <div className={`form__checkbox${value ? ' form__checkbox--checked' : ''}${getClassName(className, error())}`}>
        <div className={`form__checkboxInner`}></div>
      </div>
      {!embedded && <div className={`form__checkboxLabel`}>{label}</div>}
      {
        error() &&
          <div className={`form__error`}>{errors[name]}</div>
      }
    </div>
  )
};

export const renderSubmitButton = (status, dirty, valid, text, color) => {
  if (status === 'loading') return <div className={`ButtonLoader`}><RequestLoader size={`sm`} /></div>;
  else if (!dirty || !valid) return <DisabledButton text={text} />
  return <Button
    type="submit"
    text={text}
    buttonStyle="solid"
    color={color} />
};