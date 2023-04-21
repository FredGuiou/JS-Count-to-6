function templateStrings() {
    console.log(`Bonjour, ${process.argv[2]} !
Ton nom en minuscules est "${process.argv[2].toLowerCase()}".`);
}

templateStrings();

//Pour transformer une chaine de caractères en minuscule on utilise la méthode .toLowerCase()
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase