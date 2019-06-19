import { Validate } from './validate';

export class SubjectsModel {
    constructor(object) {
        this.schema = {
            "title": "string",
            "lessons": "number",
            "description": "string"
        }
        if (Validate.validation(object, this.schema)) {
            this.id = '_' + Math.random().toString(36).substr(2, 9);
            this.title = object.title;
            this.lessons = object.lessons;
            this.description = object.description;
        } else {
            throw new Error('Not an object, or invalid argument');
        }
    }
}