enum Colors {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white
}

function getColorCode(color: string) {
  const splitColorName = color.split('-');
  console.log(splitColorName);
}

getColorCode('brown-green')
