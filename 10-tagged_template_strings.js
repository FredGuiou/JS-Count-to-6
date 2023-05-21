console.log(html`<b>${process.argv[2]} dit</b> : "${process.argv[3]}"`);

function html(words, ...changedElements) {
    //Je définis une fonction "change" qui permet de changer les caractères spéciaux
    //et les substituer par des strings.
    const change = (spechar) => {
        return   spechar.replace(/'/g, "&apos")
                        .replace(/"/g, "&quot")
                        .replace(/</g, "&lt")
                        .replace(/>/g, "&gt")
                        .replace(/&/g, "&amp");
    }   

    let sentence = words[0];

    for (let i = 0; i < changedElements.length; ++i) {
        sentence += change(changedElements[i]) + words[i + 1];
    }

    return sentence;
}