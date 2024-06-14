const motivationalArr = ['It does not matter how slowly you go as long as you do not stop', 'Life is 10% what happens to you and 90% how you react to it.', 'If you can dream it, you can do it.', "Don't watch the clock; do what it does. Keep going.", 'In order to succeed, we must first believe that we can.'];
const factArr = ['Platypuses sweat milk.', 'Bananas glow blue under black lights.', "A woman in the United Kingdom once called the police when her ice cream didn't have enough sprinkles.", "Giraffe tongues can be 20 inches long", "It’s impossible to hum while holding your nose. You just tried it and it didn't work."];
const jokeArr = ["Justice is a dish best served cold. Otherwise, it's just water.", "How do you make holy water? You boil the hell out of it.", "What's the biggest fear of Zeus? Child support.", 'A horse walks into a diner. The host says, “Hey!” The horse says, “You read my mind.”', "What's worse than raining cats and dogs? Hailing taxis."];
const fortuneArr = ["A dream you have will come true.", "Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.", "You learn from your mistakes... You will learn a lot today.", "A very attractive person has a message for you."];
const codingArr = ["Coding has over 700 languages.", "Coding will soon be as important as reading", "The first programmer was the daughter of a mad poet", "NASA still operates some projects on programming from the 1970’s", "Computer was a job title, and the first programmers were women"];

let randomizeArray = Math.floor(Math.random() * 5);

let randomIndex = Math.floor(Math.random() * 5);

switch(randomizeArray){
    case 0:
        console.log(`Here is your daily motivation: ${motivationalArr[randomIndex]}`);
        break;
    case 1:
        console.log(`Your daily fun fact is: ${factArr[randomIndex]}`);
        break;
    case 2:
        console.log(`The joke of the day is....${jokeArr[randomIndex]}`);
        break;
    case 3:
        console.log(`I, the magical deity, bestow upon you this fortune: ${fortuneArr[randomIndex]}`);
        break;
    case 4:
        console.log(`Here is a fact about coding: ${codingArr[randomIndex]}`);
        break;
    default:
        console.log('Wow, there was an error *mind blown*');
}