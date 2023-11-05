const getAge = function (birthYear, yearNow) {
    return yearNow - birthYear;
};

console.log(getAge(1988, 2023));

const getAge3 = (birthYear, yearNow) => yearNow - birthYear;

console.log(getAge3(1988, 2024))

const canByAlcohol = (birthYear, yearNow) => {
    const age = yearNow - birthYear;
    return age >= 21;
}
console.log(canByAlcohol(1986, 2023));
