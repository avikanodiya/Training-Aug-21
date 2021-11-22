let first1: number = 123;
console.log(first1);

let string1: string = 'ahmedabad'
let x: any = 'hi'
console.log(x);
x = 54
console.log(x);

console.log(string1.charAt(2));
console.log(string1.indexOf('m', 1));

let arr1: (number)[] = [1, 2, 3, 4]
let arr2: Array<string> = ['item1', 'item2', 'item3']
console.log(arr1);
console.log(arr2);

let arr = arr1.filter((value, index, array) => {
    console.log(value);
    console.log(array);
})


