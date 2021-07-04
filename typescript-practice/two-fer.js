function twoFer(name) {
    return name === undefined ? 'One for you, one for me' : "One for " + name + ", one for me";
}
console.log(twoFer());
console.log(twoFer('Nat'));
