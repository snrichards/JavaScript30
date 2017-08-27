    // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2);

    let name = 'wes';
    let name2 = name;
    console.log(name, name2);
    name = 'wesley';
    console.log(name, name2);


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    console.log(players, team);

    // You might think we can just do something like this:
    team[3] = 'lux';

    // however what happens when we update that array?
    console.log(players, team);
    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    team2[1] = 'bob';

    console.log(players, team2);
    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    team3[0] = 'mel';

    console.log(players, team3);
    // or use the new ES6 Spread
    const team4 = [...players];
    team4[4] = 'george';

    console.log(players, team4);

    // Array.from
    const team5 = Array.from(players);
    team5[0] = 'kelly';

    console.log(players, team5);
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object
    const person = {
        name: 'Wes Bos',
        age: 80
    };
    console.log(person);
    // with Objects
    const captain = person;
    captain.age = 99;

    console.log(person, captain);
    // and think we make a copy:

    // how do we take a copy instead?
    const captain2 = Object.assign({}, person, { age: 100 });
    console.log(person, captain2);

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const wes = {
        name: 'wes',
        age: 100,
        social: {
            twitter: '@wesbos',
            facebook: 'wesbos.developer'
        }
    };

    console.log(wes);

    const dev = Object.assign({}, wes);

    console.log(wes, dev);

    dev.name = 'wesley';

    console.log(wes, dev);

    dev.social.twitter = 'none'; // the social objects still share the same reference.
    console.log(wes, dev);

    const dev2 = JSON.parse(JSON.stringify(wes));
    dev2.social.twitter = '@coolman';
    console.log(wes, dev2);