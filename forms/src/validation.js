import validator from "validator";

export function validateData(data, rules) {
  let errors = {};
  Object.keys(data).forEach(field => {
    if (rules.hasOwnProperty(field)) {
      let fieldErrors = [];
      let val = data[field];
      if (rules[field].true) {
        if (!val) {
          fieldErrors.push("Must be checked");
        }
      } else {
        if (rules[field].required && validator.isEmpty(val)) {
          fieldErrors.push("Value required");
        }
        if (!validator.isEmpty(val)) {
          if (
            rules[field].minLenght &&
            !validator.isLength(val, rules[field].minLenght)
          ) {
            fieldErrors.push(
              `Enter at least ${rules[field].minLenght} characters`
            );
          }
          if (rules[field].alpha && !validator.isAlpha(val)) {
            fieldErrors.push("Enter only letters");
          }
          if (rules[field].email && !validator.isEmail(val)) {
            fieldErrors.push("Enter a valid email address");
          }
          if (
            rules[field].equals &&
            !validator.equals(val, data[rules[field].equals])
          ) {
            fieldErrors.push("Values must match");
          }
        }
      }
      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors;
      }
    }
  });
  return errors;
}
