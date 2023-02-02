const validateEmail = (email) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

export default validateEmail;
