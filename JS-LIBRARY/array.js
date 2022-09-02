{
    const fruits = ["Apple", "Manggo", "Water Melon"];

    fruits.forEach((value, index) => {
        console.log(`${index} -> ${value}`);
    });

}



{
    // ! Queue
    const menu = [];

    menu.push('Menu Ayam Bakar');
    menu.push('Menu Ayam Goreng');
    menu.push('Menu Ikan Bakar');

    console.log(menu.shift());
    console.log(menu.shift());
    console.log(menu.shift());

}

{
    // ! Stack

    const stack = [];

    stack.push("Indomie");
    stack.push("Sedap");
    stack.push("Sarimi");

    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());


}

{
    // ! Array Search
    const angka = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    console.log(angka.find(value => value > 3));
    console.log(angka.findIndex(value => value > 3));
    console.log(angka.includes(7));
    console.log(angka.indexOf(5));
    console.log(angka.lastIndexOf(5));
}

{
    // ! Array Filter

    const numbers = [1, 10, 2, 3, 54, 6, 7, 8, 3,];
    const odd = numbers.filter(val => val % 2 === 1);
    const even = numbers.filter(val => val % 2 === 0);

    console.log(numbers);
    console.log(odd);
    console.log(even);
}

{
    // ! Array Transform 
    const names = ["John", "Wick", "Dhoe"];
    const namesUpper = names.map(value => value.toUpperCase())

    console.log(namesUpper);

    const namesReduce = names.reduce((before, value) => before + " " + value);

    console.log(namesReduce);

    const namesRight = names.reduceRight((before, value) => before + " " + value);
    console.log(namesRight);

    const numbers = [1, 2, 3, 3, 4, 5, 6, 7, 7];
    const total = numbers.reduce((before, value) => before + value)

    console.log(total);
}