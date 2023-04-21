function destructuring_2() {
    const array = process.argv.slice(2);
    // console.log(array); //[ '37', '90', '48' ]
    const min = Math.min(...array);

    console.log(`Le minimum de [${array}] est ${min}`);
}

destructuring_2();