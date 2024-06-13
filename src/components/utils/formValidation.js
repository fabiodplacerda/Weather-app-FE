export const validatePassword = (password, setFunc) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const itMatches = passwordRegex.test(password);
  setFunc(itMatches);
  return itMatches;
};
export const validateEmail = (email, setFunc) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const itMatches = emailRegex.test(email);
  setFunc(itMatches);
  return itMatches;
};
export const validateName = (name, setFunc) => {
  const itMatches = name.length > 3;
  setFunc(itMatches);
  return itMatches;
};
