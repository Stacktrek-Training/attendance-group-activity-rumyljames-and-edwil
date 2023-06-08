function Status(input) {
  const lowercaseInput = input.toLowerCase();
  if (
    lowercaseInput === "minahal" ||
    lowercaseInput === "nasaktan" ||
    lowercaseInput === "nagmahal"
  ) {
    return "Present";
  } else {
    return "Absent";
  }
}

console.log(Status("minahal"));
console.log(Status("Ako Bigo"));
