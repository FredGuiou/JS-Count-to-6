function arrowFunctions() {
    const inputs = process.argv.slice(2);
    // console.log(inputs);
    // [ 'Camp', 'Java', 'Script' ]

    const result = inputs
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substr
        // Avec la méthode substr je peux récupérer la première lettre de chaque chaine de caractères du tableau.
        .map(inputs => inputs.substr(0, 1))
        //Solution utilise .map(s => s[0]) plus simple que substr.
        // console.log(result);
        //['T', 'N', 'M', 'T'] Ok j'obtiens bien la première lettre de chaque élément.
        .reduce((acc, curr) => acc + curr);
        // console.log(result);
    console.log(`[${inputs}] devient "${result}"`);
}

arrowFunctions();