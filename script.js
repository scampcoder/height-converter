document.getElementById("submit").addEventListener("click", heightConverter);

function heightConverter() {
  const feet = parseInt(document.getElementById('feet').value * 12);
  const inches = parseInt(document.getElementById('inches').value);
  const cm = (feet + inches) * 2.54;
  let n = cm.toFixed(0);

  document.getElementById('result').innerHTML = n;
}
