// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

let destructivelyAppendCat = name => cats.push(name)

let destructivelyPrependCat = name => cats.unshift(name)

let destructivelyRemoveLastCat = () => cats.pop()

let destructivelyRemoveFirstCat = () => cats.shift()

let appendCat = name => [...cats, name]

let prependCat = name => [name, ...cats]

let removeLastCat = () => cats.slice(0, 2)

let removeFirstCat = () => cats.slice(1)
