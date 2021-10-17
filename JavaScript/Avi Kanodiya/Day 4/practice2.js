/*we can declare var variable again , cant declare let variable againo*/
if (true) {
    var varVariable = "var variable"
}

console.log(varVariable);

if (true) {
    let letVariable = "let variable"
    console.log("inside if: " + letVariable);
}

console.log(letVariable);