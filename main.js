const words = ['non', 'banan', 'mashina', 'asal','olma', 'aziza','Gul'];

const withN = []
const withoutN = []

words.forEach(word =>{
    if (word.includes('n')){
        withN.push(word);
    } else {
        withoutN.push(word);
    }
});


console.log(withN, "'n' harfi ishtirok etgan so'zlar");
console.log(withoutN, "'n' harfi ishtirok etgan so'zlar");