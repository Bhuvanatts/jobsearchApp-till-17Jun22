export function mobilenumberValidator(phoneNum) {
    const re = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
    if (!phoneNum) return "Email can't be empty."
    if (!re.test(phoneNum)) return 'Enter valid Mobile number'
    return 
  }


