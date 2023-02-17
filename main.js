// Use a do...while loop to console.log the numbers from 1 to 1000.

// const countToThousand = () => {
// let count = 1;
// do {
//     console.log(count);
//     count++
// } while ( count <= 1000)
// }

// countToThousand()

// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}


// Create a function that logs out the keys of the object using Object.keys().

const personKeys = () => {
console.log(Object.keys(person));
}

personKeys()

// Create a function that logs out the keys and values of the object using Object.entries().

const personEntries = () => {
console.log(Object.entries(person));
}

personEntries()

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
    {
        firstName: "Bob",
        lastName: "Till",
        birthDate: "Feb 5, 1945",
        gender: "male"
    }, 
    { 
        firstName: "Lady",
        lastName: "Anabelle",
        birthDate: "April 5, 1955",
        gender: "female"
    },
    {
        firstName: "Tim",
        lastName: "Taylor",
        birthDate: "Mar 5, 1965",
        gender: "male"
    },
    {
        firstName: "Rob",
        lastName: "Saiyan",
        birthDate: "Jan 10, 1994",
        gender: "male"
    }
]



// Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.

const oddBirthYears = () => {
for (const elements of arrayOfPersons) { 
    let birthYear = elements.birthDate.slice(-4)
    if (birthYear %2 ==1)
    console.log(birthYear);

}
}

oddBirthYears()


// Use .map() to map over the arrayOfPersons and console.log() their information.

arrayOfPersons.map(person => console.log(`Name: ${person.firstName} ${person.lastName}
Birthdate: ${person.birthDate}
Gender: ${person.gender}
`)
)



// Use .filter() to filter the persons array and console.log 0only males in the array.

const onlyMales = arrayOfPersons.filter(persons => (persons.gender === "male"));
console.log(onlyMales)


// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const reallyOldPeople = () => {
    for (let i =0; i < arrayOfPersons.length; i++)  {
        if (arrayOfPersons[i].birthDate.slice(-4) < 1990) {
            console.log("true");
    }
 }
}


reallyOldPeople()

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const oldPeople = arrayOfPersons.filter(persons => (persons.birthDate.slice(-4) < 1990))
console.log(oldPeople)


// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.


// BONUS - .filter() out the people in the array who are younger than 21.

