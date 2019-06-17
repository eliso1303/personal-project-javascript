export class LMSModel {
    constructor() {
        this.subjects = new Map();
    }
    add(subject) {
        if (subject && typeof subject === 'object' && subject.id) {
            this.subjects.set(subject.id, subject);
        }
    }
    remove(subject) {
        if (this.subjects.has(subject.id)) {
            this.subjects.delete(subject.id);
        } else {
            throw new Error('Can\'t delete');
        }
    }

    verify(subject) {
        return this.subjects.has(subject.id) ? true : false;
    }

    readAll() {
        return [this.subjects];
    }
}