export class SubjectsModel {
    constructor(object) {
        if (object && typeof object === 'object' && object.title && typeof object.title === "string" && object.lessons && typeof object.lessons === "number") {
            this.id = new Date().getUTCMilliseconds() + Math.random();
            this.title = object.title;
            this.lessons = object.lessons;
            if (object.description && typeof object.description === "string") {
                this.description = object.description;
            }
        } else {
            throw new Error('Not an object, or invalid argument');
        }
    }
}