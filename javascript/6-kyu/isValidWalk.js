/*
DESCRIPTION:
You live in the city of Cartesia where all roads are laid out in a perfect
grid. You arrived ten minutes too early to an appointment, so you decided to
take the opportunity to go for a short walk. The city provides its citizens
with a Walk Generating App on their phones -- everytime you press the button it
sends you an array of one-letter strings representing directions to walk (eg.
['n', 's', 'w', 'e']). You always walk only a single block for each letter
(direction) and you know it takes you one minute to traverse one city block, so
create a function that will return true if the walk the app gives you will take
you exactly ten minutes (you don't want to be early or late!) and will, of
course, return you to your starting point. Return false otherwise.

" Note: you will always receive a valid array containing a random assortment of
direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty
array (that's not a walk, that's standing still!)."

*/


function isValidWalk(walk) {
    if(walk.length > 10) return false;
    if(walk.length === 0) return true;
    if(walk.length < 3) return false;

    const stack = [walk[0]];
    const getInverse = value => {
        if(value === 'n') return 's';
        if(value === 's') return 'n';
        if(value === 'e') return 'w';
        if(value === 'w') return 'e';
    }

    for(let i = 1; i < walk.length; i++) {
        let current = walk[i];
        let inverse = getInverse(current);
        if(stack.includes(inverse)) {
            stack.splice(stack.indexOf(inverse), 1);
            continue;
        }
        stack.push(current);
    }

    if(stack.length === 0) return true;
    return false;
}

// Time to complete: 23min
