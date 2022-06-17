export function passwordValidator(password) {
  const re =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  if (!password) return "Password can't be empty."
  if (!re.test(password)) return 'Password should have upper, lower , numbers and symbols'
  return 
}
