const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tax){
        this.salary = this.salary - amount - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Aalam',
    salary: 25000
} 

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000, 100);
console.log(heroPerson.salary);

console.log(normalPerson);
console.log(normalPerson.firstName);
normalPerson.chargeBill(150, 100);
normalPerson.chargeBill(1050, 100);
console.log(normalPerson.salary);

// arekjoner patil niye eshe nije ranna kora ==> bind
// or arekjoner boi dhar kore ene pass kora ==> bind

normalPerson.chargeBill.call(heroPerson, 900, 100);
console.log(heroPerson.salary);

// sorasori or basai giye or mobile diye nijer number diye dial kora ==> call

// call ar apply er difference holo object er pore je value gula pathabo call e segula comma diye diye pathabo
// ar apply e object er por value gula ekta array te niye tarpor pathabo. 

normalPerson.chargeBill.apply(heroPerson, [900, 100]);
console.log(heroPerson.salary);