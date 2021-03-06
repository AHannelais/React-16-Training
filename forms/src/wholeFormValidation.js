export function validateForm(data) {
  let errors = [];
  if (!data.email.endsWith("@exemple.com")) {
    errors.push("Only exemple.com users allowed");
  }
  if (!data.email.toLowerCase().startsWith(data.name.toLowerCase())) {
    errors.push("Email address must start with name");
  }
  if (data.name.toLowerCase() === "joe") {
    errors.push("Go away Joe !");
  }
  return errors;
}
