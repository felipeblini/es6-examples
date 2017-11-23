var avo = {
    attr1: 'A'
};

var pai = {
    __proto__: avo,
     attr2: 'B'
};

var filho = {
    __proto__: pai,
    attr3: 'C'
};

console.log(filho.attr1 + ' ' + filho.attr2 + ' ' + filho.attr3);

var mae = {
    corDoCabelo: 'Castanho'
};

var filha = {};

Object.setPrototypeOf(filha, mae);

console.log(filha.corDoCabelo);

console.log(Object.getPrototypeOf(filho));

console.log('filho.__proto__', filho.__proto__);