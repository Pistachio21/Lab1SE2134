let reader = require('readline-sync')
let newFile = require('fs')


let nameValue = reader.question('Enter your Name: ')
let debtValue = reader.question('Enter your Debt: ')

let promiseValues = new Promise(function(resolve, reject) {
    if (nameValue !== null && debtValue !== null) {
       resolve(console.log(`Debt added!`))
    } else {
        reject(console.log(`An error occurred.`))
    }
})


async function generateTxtFile() {
    await newFile.writeFile('debts.txt', `Name:${nameValue}, Debt:${debtValue}`, function(error) {
        if (error) {
            console.log(`An error occurred.`)
        } else {
            console.log(`Debt file generated!`)
        }
    })
}

generateTxtFile()