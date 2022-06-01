class randoom {
    constructor() {
        this.data = Array.from({ length: 1000 }, () => "name" + Math.floor(Math.random() * 1000));
    }

    findnode(number) {
        return this.data.find(item => item === "name" + number)
    }

    find7() {
        const find7 = this.findnode(7)
        return !!find7
    }
    find3007() {
        const find3007 = this.findnode(3007)
        return !!find3007
    }
    getrandoom() {
        return this.data
    }
}
const randomNumbers = new randoom

console.log(randomNumbers.getrandoom())
console.log("node 7: ", randomNumbers.find7())
console.log("node 3007: ", randomNumbers.find3007())