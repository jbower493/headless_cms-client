export const multipleValidations = (value, validations) => {
  let errors = [];
  validations.forEach(validation => {
    const result = validation(value);
    if (result) errors.push(result);
  })
  return errors.length > 0 ? errors[0] : undefined;
}

export const requiredField = (value) => {
  return value ? undefined : 'Required';
}