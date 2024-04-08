// function to validate Phone Number
function validatePhoneNumber(number) {
  // Regular expression to match the phone number format
  const phoneNumberRegex = /^\+923\d{9}$/;

  // Test if the number matches the regex
  return phoneNumberRegex.test(number);
}

export { validatePhoneNumber };