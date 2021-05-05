const multiply = function(n1,n2) {
    return n1 * n2
}

const add = function(n1,n2) {
    return n1 + n2
}

// HIGHER ORDER FUNCTION 
// a function that accepts or returns other functions

const emptyClassroom = []
const someStudents = ["Khaled", "Luis", "Sherine"]

// "METHOD" is a function belonging to something eg. Array.prototype.forEach
// HIGHER ORDER FUNCTION 
// FUNCTOR

someStudents.forEach((student) => {
    emptyClassroom.push(multiply(3,5))
})

console.log(multiply("a","v"))

function logger(something) {
    console.log(something)
}

logger(add)
logger(add(3,6))
logger(add(add(3,6),3))
logger(add(add(add(1,2),3),6))
logger(add(add(add(1,2),3),6))
logger(add(add(add(1,2),3),6))