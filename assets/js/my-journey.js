const colorPicker = document.getElementById('colorPicker');
const selectedColor = document.getElementById('selectedColor');

colorPicker.addEventListener('input', function () {
  const color = colorPicker.value;
  selectedColor.style.backgroundColor = color;
});

const colorPickerBackground = document.getElementById('colorPickerBackground');
const selectedColorBackground = document.getElementById('selectedColorBackground');

colorPickerBackground.addEventListener('input', function () {
  const color = colorPickerBackground.value;
  selectedColorBackground.style.backgroundColor = color;
});