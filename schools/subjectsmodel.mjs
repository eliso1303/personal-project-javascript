import { Validate } from './validate';

export class SubjectsModel {
    constructor(object) {
        this.schema = {
            "title": "string",
            "lessons": "number",
            "description": "string"
        }
        if (Validate.validation(object, this.schema)) {
            this.id = new Date().getUTCMilliseconds() + Math.random();
            this.title = object.title;
            this.lessons = object.lessons;
            this.description = object.description;
        } else {
            throw new Error('Not an object, or invalid argument');
        }
    }
}