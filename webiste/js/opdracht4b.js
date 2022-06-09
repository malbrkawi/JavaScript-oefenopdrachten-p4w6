const array = [{
    firstName: `Max`,
    lastName: `Laadvermogen`,
    age: `23 jaar`,
    location: `Zoetermeer`,
}, {
    firstName: `Timo`,
    lastName: `Bijl`,
    age: `18 jaar`,
    location: `Den Haag`,
}, {
    firstName: `Bennie`,
    lastName: `Lekker`,
    age: `34 jaar`,
    location: `Rotterdam`,
}, {
    firstName: `Luuk`,
    lastName: `De Jong`,
    age: `23 jaar`,
    location: `breda`,
}, {
    firstName: `Thijs`,
    lastName: `Visser`,
    age: `53 jaar`,
    location: `Utrecht`,
}];
for (let index = 0; index < array.length; index++) {
    console.log(array[index].firstName, array[index].lastName);
    console.log(array[index].age);
    console.log(array[index].location);
    console.log(`*********`);
}