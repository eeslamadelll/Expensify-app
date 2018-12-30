const me = {
    name: 'Eslam',
    age: '24',
    location: {
        country: 'Egypt',
        temp: 38
    }
}

const { name = 'Anonymous', age } = me;
console.log(`${name} is ${age} years old.`);

const { country, temp: temprature } = me.location;
console.log(`He lives in ${country}, which has a degree of ${temprature}.`);

const adress = ['18 Salah Salem Street', 'cairo', 'Egypt', 12345];
const [, city, theCountry] = adress; // this will ignore the first item in adress arrat and any thing comes after the third item.
console.log(`You lives in ${city} ${country}`);