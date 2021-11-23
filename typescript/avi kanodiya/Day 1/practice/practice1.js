let arr3 = [1, 2, 3];
const a = arr3.filter((arr, index) => {
    console.log(arr);
    return arr < 2;
});
console.log(a);
