var precoFull = 29.99,
    parcela = 11;

var preco = (real `1x de ${precoFull} ou 3x ${parcela}`);
console.log('\n\n' + preco);

function real(strings, ...values) {
    console.log(strings);
    console.log(values);
    const RESULTADO = [];
    values.forEach(function(value, index) {
        value = (typeof value == 'number') ?
        `R$${value.toFixed(2)}` : value;
        RESULTADO.push(strings[index], value);
    });

    return RESULTADO.join('');
}

