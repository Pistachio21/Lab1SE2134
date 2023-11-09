let reader = require('readline-sync')
let newFile = require('fs')


let nameValue = reader.question('Enter your Name: ')
let debtValue = reader.question('Enter your Debt: ')

function getDebt() {
    return debtValue
}

function getName() {
    return nameValue
}



function generateTxtFile(debt, name) {
    newFile.writeFile('debts.txt', `Name:${name}, Debt:${debt}`, function(error) {
        if (error) {
            console.log(`An error occurred.`)
        } else {
            console.log(`Debt file generated!`)
        }

    })
}

generateTxtFile(getDebt(), getName())