const jack = {
    firsName: "Jack",
    lastName: "White",
    weight: 78,
    height: 1.70,
    calcBmi: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const mike = {
    firsName: "Jack",
    lastName: "White",
    weight: 91,
    height: 1.93,
    calcBmi: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

console.log(jack.calcBmi());
console.log(jack.bmi);

console.log(mike.calcBmi());
console.log(mike.bmi);
