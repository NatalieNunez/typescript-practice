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
    var splitColorName = color.split('-');
    console.log(splitColorName);
}
getColorCode('brown-green');
