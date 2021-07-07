var Colors;
(function (Colors) {
    Colors[Colors["black"] = 0] = "black";
    Colors[Colors["brown"] = 1] = "brown";
    Colors[Colors["red"] = 2] = "red";
    Colors[Colors["orange"] = 3] = "orange";
    Colors[Colors["yellow"] = 4] = "yellow";
    Colors[Colors["green"] = 5] = "green";
    Colors[Colors["blue"] = 6] = "blue";
    Colors[Colors["violet"] = 7] = "violet";
    Colors[Colors["grey"] = 8] = "grey";
    Colors[Colors["white"] = 9] = "white";
})(Colors || (Colors = {}));
function getColorCode(color) {
    var colorArray = color.split('-');
    if (colorArray.length < 2) {
        console.log('Error: Must have at least two colors');
        return;
    }
    var firstColor = colorArray[0];
    var secondColor = colorArray[1];
    for (var color_1 in Colors) {
        if (firstColor === color_1 || secondColor === color_1) {
            console.log(Colors[color_1]);
            // let firstNumCode = Colors[color]
        }
    }
}
getColorCode('green-brown');
