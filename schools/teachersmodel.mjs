import { Validate } from './validate';

export class TeachersModel {
    constructor() {
        this.teachers = new Map();
        this.schema = {
            "name": {
                "first": "string",
                "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "emails": [
                {
                    "email": "string",
                    "primary": "boolean"
                }
            ],
            "phones": [
                {
                    "phone": "string",
                    "primary": "boolean"
                }
            ],
            "sex": "string", // male or female
            "subjects": [
                {
                    "subject": "string"
                }
            ]
        }
    }

    async add(teacher) {
        if (Validate.validation(teacher, this.schema)) {
            let id = new Date().getUTCMilliseconds() + Math.random();
            this.teachers.set(id, teacher);
            console.log(this.teachers);
            return id;
        } else {
            throw new Error('Not an object, or invalid argument');
        }
    }
}