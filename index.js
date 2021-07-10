function reverse(string) {
  return string
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
};

module.exports = reverse;