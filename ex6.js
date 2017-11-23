var pai = {
    func() { return 'Pai'; }
};

var filho = {
    toString() { return `${super.func()} + Filho`}
};

Object.setPrototypeOf(filho, pai);

console.log(filho.toString());