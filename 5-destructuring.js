function destructuring () {
    let userArray = process.argv.slice(2);
    // console.log(userArray); //[ '2', 'fbar', 'foo@bar.com', '23' ]
    //Je définis mon objet user qui recevra les informations en provenance de userArray
    let user ={};

    //J'utilise le destructuring pour "passer les propriétés" username et email de userArray à user.
    [, user.username, user.email] = userArray;

    //Je console.log l'utilisateur.
    console.log(user); // {username: "jdoe", email: "john@doe.com"}
}

destructuring();