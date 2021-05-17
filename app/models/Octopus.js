export class Octopus {

    constructor(
        name = '',
        sex = '',
        color = '',
        age = '',
        weightInLbs = 0,
        lbsOfFoodPerDay = 0,
        alive = true

    ) {
        if (!name) { throw new Error('Name is required.') }
        this.name = name;
        this.sex = sex;
        this.color = color;
        this.age = age;
        this.weightInLbs = weightInLbs;
        this.lbsOfFoodPerDay = lbsOfFoodPerDay;
        this.alive = alive || true
    }
}