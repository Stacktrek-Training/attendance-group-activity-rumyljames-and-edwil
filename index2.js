function checkString(input) {
  const stats = ["Minahal", "Nasaktan", "Nagmahal"];
  const lowercaseInput = input.toLowerCase();
  const lowercaseStats = stats.map((item) => item.toLowerCase());
  let result = "Absent";

  if (lowercaseStats.includes(lowercaseInput)) {
    result = "Present";
  }
  return result;
}

console.log(checkString("miNaHal"));
console.log(checkString("Ako Bigo"));
