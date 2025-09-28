function add(a, b) {
    // console.log(a, b)
    // console.log(arguments);

    const argumentsAre= [...arguments]
    console.log(argumentsAre);
    console.log(' After double it:',argumentsAre.map( n => n*2));

}

add( 12,45,1,39,0);