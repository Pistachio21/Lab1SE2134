let reader = require('readline-sync')
let newFile = require('fs')


let nameValue = reader.question('Enter your Name: ')
let debtValue = reader.question('Enter your Debt: ')

const promiseValues = new Promise(function(resolve, reject) {
    if (nameValue !== undefined && debtValue !== undefined) {
       resolve(console.log(`Debt added!`))
    } else {
        reject(console.log(`An error occurred.`))
    }
})

promiseValues
    .then(function generateTxtFile() {
    newFile.writeFile('debts.txt', `Name:${nameValue}, Debt:${debtValue}`, function(error) {
        if (error) {
            console.log(`An error occurred.`)
        } else {
            console.log(`Debt file generated!`)
        }

    })
}) .catch(function returnError() {
    return console.log(`Unexpected error occurred.`)
})