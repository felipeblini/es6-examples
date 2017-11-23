function random([min = 0, max = 100]) {
    if(min > max) {
        var [min, max] = [max, min];
    }

    console.log('min:', min);
    console.log('max:', max);

    var value = Math.random() * (max - min);
    return Math.floor(value) + min;
}

console.log(random([300, 200]));