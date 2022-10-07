const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) console.log(err)
    console.log(res)

    const first = res
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) console.log(err)
        console.log(res)
    })
    const second = res
    writeFile('./content/result-async.txt', `hello this is the result : ${first} , ${second}`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
})