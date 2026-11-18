const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 },
]

function pickPropArray(array, property) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (Object.hasOwn(item, property)) {
            result.push(item[property]);
        }
    }

    return result;
}

const result = pickPropArray(students, 'age')
const result1 = pickPropArray(students, 'name')

console.log(result,result1) 
