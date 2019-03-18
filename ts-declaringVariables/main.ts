
//var num1 = 1;
//let num2 = 1;

function doSomethingUsingVar() {
    for (var i = 0; i < 5; i++) { // var is available in the whole function.
        console.log(i);
    }

    console.log('Finally: ' + i);
}


function doSomethingUsingLet() { //let only works locally in the for block. No access out of it.
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomethingUsingVar(); 
doSomethingUsingLet(); 
