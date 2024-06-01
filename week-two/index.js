

//  alert('hello')

const age = 12

let name = 'Kate'

const isAnAdult = true

const amount = 10.3

const number1 = 'jude'

const number_two = 'isaac'

const report = ['Paul', 300, false, 9.2, ] //there are 4 elements inside report
// position of elements in array starts from 0
const value = report[3]


const nothing = undefined

const nothing2 = null

const person = {
  name: 'kate',
  age: 13,
  height: 'tall',
  isAlive: true,
  friends: ['lola', 'john', 'timothy'],
  grades: {
    math: 99,
    science: 98,
    english: 97,
  },
  sayHi: function () {
    console.log('hi')
  },
  isHonest: undefined,
} //curly braces are used to create an object while square bracket is used for array


/* difrent data types
string
number
boolean
undefined
null
object
array
*/




const judesAccount = {
  name: 'jude',
  accoutNumber: 3012134480,
  balance: 1000,
  isAlive: true,
  pin: 1234,
}
console.log(judesAccount)


function sayHi(name) {
 console.log(name + 'how can i help you?')
}

const pinElement = document.getElementById('pin')

// sayHi('Israel')

function submitATmPin(){
    const pinValue = pinElement.value
    console.log(pinValue, ' i have been called')

    checkPin(pinValue)

    return pinValue

}
// compare supplied to judesAccount pin
function checkPin(pin){
    // 
    if(Number(pin) === judesAccount.pin){
        console.log('correct pin')
        alert('correct pin')

    }else{
        console.log('incorrect pin')
        alert('incorrect pin')
    }
}




