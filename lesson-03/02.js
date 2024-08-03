// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num1, num2) {
    if (num1 % num2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }

}
isEven(6, 2)
