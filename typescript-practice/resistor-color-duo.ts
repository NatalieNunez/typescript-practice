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
  const colorArray = color.split('-');
  if (colorArray.length < 2) {
    console.log('Error: Must have at least two colors')
    return;
  }
  const firstColor = colorArray[0];
  const secondColor = colorArray[1];
  for (let color in Colors) {
    if (firstColor === color) {
      console.log(Colors[color])
      let firstNumCode = Colors[color]
    }
    for (let color in Colors) {
      if (secondColor === color) {
        console.log(Colors[color])
        let secondNumCode = Colors[color]
      }
    }
  }
}

getColorCode('green-brown')
