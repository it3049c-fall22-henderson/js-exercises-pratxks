// strictEquality: compare value & type
// Example: strictEquality(1, true) => false
// Example: strictEquality(1, 1) => true
function strictEquality(val1, val2) {
  if ((typeof val1 == typeof val2) && (val1 == val2)) return true;

  return false;
}
//equality: compare value but not necessarily the type
// Example: equality(1, true) => true
// Example: equality(1, 1) => true
// Example: equality(1, false) => false
function equality(val1, val2) {
  if (val1 == val2) return true;

  return false;
}

module.exports = {
  strictEquality,
  equality
};
