let arr3: (number)[] = [1, 2, 3]

const a = arr3.filter((arr) => {
    console.log(arr);

    return arr < 2;
})

console.log(a);
