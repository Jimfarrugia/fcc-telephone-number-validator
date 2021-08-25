// Valid phone number formats:
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// If the country code is provided it must be === 1
// If valid return true, else return false.

// * Thoughts:
// Sounds like a job for regular expressions but idk how to handle the mix of possible starting characters.
// Might be easiest to analyse the input string from right to left. (but imperative = bad?)
// Min number chars: 10
// Max number chars: 14-16
// Final 4 chars in the string should always numerals.
// Only chars allowed are numerals, parenthesis, dashes and spaces.

//* Found this regex on stackoverflow that should handle most cases
// ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$
// It will not handle phone numbers that include the country code
//* Edited it a little to handle a country code of 1
// ^[1]?[\s]?[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$

// TODO
// - Test if $str is a valid phone number.
// - Return a boolean.

function telephoneCheck(str) {
  if (
    (str.indexOf("(") > -1 && str.indexOf(")") < 0) ||
    (str.indexOf(")") > -1 && str.indexOf("(") < 0)
  ) {
    // if only a single parentheses is found
    return false;
  }

  const regex =
    /^[1]?[\s]?[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;

  return regex.test(str);
}

console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
