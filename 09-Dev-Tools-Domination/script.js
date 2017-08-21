    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    const variable = 'interpolated';
    console.log('Hello I am a %s string!', variable);
    console.log(`Hello I am a ${variable} string!`); // es6 templates

    // Styled
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

    // warning!
    console.warn('OH NOO');

    // Error :|
    console.error('AHH!');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    console.assert(1 === 1, 'that is wrong!'); // won't display in console

    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'ouch is not on p!!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        // groupCollapsed will start each group in the collapsed state.
        console.group(`${dog.name}`);
        console.log(`this is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });


    // table
    console.table(dogs);