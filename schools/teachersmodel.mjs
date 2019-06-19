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
            ],
        }
    }

    add(teacher) {
        if (Validate.validation(teacher, this.schema)) {
            Validate.moreValidate(teacher);
            let id = new Date().getUTCMilliseconds() + Math.random();
            this.teachers.set(id, teacher);
            return id;
        } else {
            throw new Error('Not an object, or invalid argument');
        }
    }

    read(id) {
        if(this.teachers.has(id)){
            return this.teachers.get(id);
        }else{
            throw new Error('there is no such teacher');
        }
    }

    update(id, newInfo){
        Validate.validation(newInfo, this.schema);
        Validate.moreValidate(newInfo);
        return this.teachers.set(id, newInfo);
    }

    remove(id) {
        if(this.teachers.has(id)){
            this.teachers.delete(id);
        }else{
            throw new Error('there is no such teacher');
        }
    }
}