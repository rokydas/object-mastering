function add (num1, num2) {
    let result = num1 + num2;
    // result ekta local variable
    // let, const, var declaration e egula use na korle seta global hoye jabe. eta onichakrito
    // window.result (evabe likhle seta function er vitor ichakrito vabe global hobe.)
    function doubleIt(num) {
        return num * 2;
    }
    total = doubleIt(result);
    return total;
}

let sum = add (13, 17);
console.log(sum);

// local variable
// global variable 
// function er vitor function thakle vitorer function local hoye jabe. 