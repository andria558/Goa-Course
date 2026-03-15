//! Is that a real phone number? (British version)

//? Solution : 

function validateNumber(str) {
  if (!str) {
    return "Plenty more fish in the sea"
  }

  let cleaned = str.replace(/-/g, "")

  if (cleaned.startsWith("07") && cleaned.length === 11) {
    return "In with a chance"
  }

  if (cleaned.startsWith("+447") && cleaned.length === 13) {
    return "In with a chance"
  }

  return "Plenty more fish in the sea"
}