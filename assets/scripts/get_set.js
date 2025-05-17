const person = {
    firstName: 'John',
    lastName: 'Doe',

    // Getter for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setter for fullName
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0] || '';
        this.lastName = parts[1] || '';
    }
};

console.log(person.fullName); // John Doe

// Using setter to update both firstName and lastName
person.fullName = 'Jane Smith';

console.log(person.firstName); // Jane
console.log(person.lastName);  // Smith
console.log(person.fullName);  // Jane Smith
