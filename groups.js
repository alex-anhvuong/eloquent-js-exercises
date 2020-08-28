class Group {
    constructor() {
        this.content = [];
    }

    add(value) {
        this.has(value) || this.content.push(value);
    }

    delete(value) {
        let content = this.content;
        let index = content.indexOf(value);
        if (index !== -1) {
            this.content = content.slice(0, index).concat(content.slice(index + 1, content.length));
        }
    }

    has(value) {
        return this.content.indexOf(value) != -1 ? true : false;
    }

    static from(iterableObj) {
        let group = new Group();
        for (let element of iterableObj) group.add(element);
        return group;
    }

    toString() {
        return `Members of the group: ${this.content.join(', ')}`;
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        if (this.index == this.group.content.length) return { done: true };
        let value = this.group.content[this.index];
        this.index++;
        return { value, done: false };
    }
}

Group.prototype[Symbol.iterator] = function () { return new GroupIterator(this); }
let group = Group.from([1, 1, 2, 3, 4]);
group.delete(2);
console.log(group);
console.log(group.has(1));
console.log(group.has(2));
console.log(group.toString());

for (let member of group) console.log(member);


