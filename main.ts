let drie = 0
basic.forever(function () {
    if (drie < 13) {
        basic.showNumber(drie)
        drie += 3
    } else {
        drie = 0
        basic.showNumber(drie)
    }
})
