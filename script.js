function convertWeight() {
  const kgInput = document.getElementById("kg");
  const kg = parseFloat(kgInput.value);

  // Convert kilograms to pounds (1 kg = 2.20462 lb)
  const lb = kg * 2.20462;

  // Convert pounds to ounces (1 lb = 16 oz)
  const oz = lb * 16;

  // Update the result fields
  const lbInput = document.getElementById("lb");
  const ozInput = document.getElementById("oz");
  lbInput.value = lb.toFixed(2);
  ozInput.value = oz.toFixed(2);
}
