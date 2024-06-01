

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

// console.log(judesAccount)




const accounts = [
  {
    name: 'Jude',
    accoutNumber: 3012134480,
    balance: 1000,
    isAlive: true,
    pin: 1234,
  },
  {
    name: 'Israel',
    accoutNumber: 3012134481,
    balance: 2000,
    isAlive: true,
    pin: 2345,
  },
  {
    name: 'Martina',
    accoutNumber: 3012134482,
    balance: 1000,
    isAlive: true,
    pin: 3456,
  },
]

function sayHi(name) {
 console.log(name + 'how can i help you?')


}

const msgOne = document.getElementById('msg-one')

const msgTwo = document.getElementById('msg-two')


const username = document.getElementById('username')


function findUser(accountNumber){
const user = accounts.find((element) => {
     return element.accoutNumber == accountNumber
   }) 
   if(user === undefined || user === null){
    alert('account not found')
   }
   return user
}

const a = [{name: 'k'}, {name: 'b'}, {name: 'c'}]
function findIndexofUser(accountNumber){
  const index = accounts.findIndex((element) => {
     return element.accoutNumber == accountNumber
   })
   if(index === -1){
    alert('account not found')
   }
   return index
  }

function WelcomeAtmUser(){
    const accountNumber = Number(prompt('Enter your account number?'))

    if(Number.isNaN(accountNumber)){
        alert('invalid account number')
    }
   
     const pin = Number(prompt('Enter your PIN?'))
      if (Number.isNaN(pin)) {
        alert('invalid PIN')
      }
     
  const user = findUser(accountNumber)

  if(user.pin === pin){
    username.innerText = username.innerText + " " + user.name + "!"

  }else{
    alert('incorrect account number/pin')
  }
   localStorage.setItem('accountNumber', user.accountNumber)
    console.log(user)

}

function submitATmPin(){
    const pinValue = pinElement.value
    console.log(pinValue, ' i have been called')

    checkPin(pinValue)

    return pinValue

}
// compare supplied pin to judesAccount pin
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


function deposit(){

const depositAmount = prompt('how much do you want to deposit?')
const amountInNumber = Number(depositAmount)
console.log(amountInNumber)
judesAccount.balance = judesAccount.balance + amountInNumber
 msgOne.innerHTML = 'amount successfully deposited'
 msgTwo.innerHTML = 'your new balance is ' + judesAccount.balance

console.log(judesAccount)

}

function withdraw(){
 const amountTowithdraw = prompt('how much do you want to withdraw?')
 const amountInNumber = Number(amountTowithdraw)

 if(judesAccount.balance >= amountInNumber){  
     judesAccount.balance = judesAccount.balance - amountInNumber
 msgOne.innerHTML = 'amount successfully withdrawn'
     msgTwo.innerHTML = 'please take your cash'
     console.log(judesAccount)
 }else{
   msgOne.innerHTML = 'insufficient funds'
  // alert('insufficient funds')
 }


}

function checkBalance(){
    console.log(judesAccount.balance)
     msgTwo.innerHTML = 'your balance is ' + judesAccount.balance
   
    console.log(judesAccount)
}


function changePIN() {
   const pinOne = prompt('Enter your new pin?')
   const pinTwo = prompt('Enter your new pin again?')
   if (pinOne === pinTwo) {
       judesAccount.pin = pinOne
       msgOne.innerHTML = 'pin successfully changed'
   } else {
       msgOne.innerHTML = 'pin mismatch'
   }
}
/************************************** */
// Using Arrays of object in the below functions

function depositIntoAccount() {
  let accountNumber = localStorage.getItem('accountNumber')

  const depositAmount = prompt('how much do you want to deposit?')
  const amountInNumber = Number(depositAmount)
  console.log(amountInNumber)

  //loops arrays method

  const user = findUser(accountNumber)

  user.balance = user.balance + amountInNumber
  
  const userIndex = findIndexofUser(accountNumber) // find the position of user in the account array
  accounts[userIndex] = user // update the user in the account array



  msgOne.innerHTML = 'amount successfully deposited'
  msgTwo.innerHTML = 'your new balance is ' + user.balance

  console.log(judesAccount)
}

depositIntoAccount(3012134480)