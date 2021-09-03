// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let newCatEnd;
    newCatEnd = [...cats, name];
    return newCatEnd;
}

function prependCat(name) {
    let newCatStart;
    newCatStart = [name, ...cats];
    return newCatStart;
}

function removeLastCat() {
    let catSliceEnd;
    catSliceEnd = cats.slice(0, 2);
    return catSliceEnd;
}

function removeFirstCat() {
    let catSliceFront;
    catSliceFront = cats.slice(1);
    return catSliceFront;
}