var nome = 'Bia', anoNascimento = 1981;

function idade() {
    return new Date().getFullYear() - anoNascimento;
}

var dinamicAttr = 'sexo';
var dinamicAttrValue = 'Feminino';

var pessoa = {
    nome,
    anoNascimento,
    idade,
    [dinamicAttr]: dinamicAttrValue,
    toString() { return `${nome} = ${idade()}`; }
};

console.log(pessoa.toString() + ', ' + pessoa.sexo);