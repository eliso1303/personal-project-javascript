import { Validate } from './validate';

export class PupilsModel {
    constructor() {
        this.pupils = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", // male OR female
          }
          this.id=new Date().getUTCMilliseconds() + Math.random();
    }

    add(pupil) {
        if (Validate.validation(pupil, this.schema)) {
            Validate.moreValidate(pupil);
            this.pupils.set(this.id, pupil);
            return this.id;
        } else {
            throw new Error('Not an object, or invalid argument');
        }
    }

    read(id) {
        if(this.pupils.has(id)){
            return this.pupils.get(id);
        }else{
            throw new Error('there is no such pupil');
        }
    }

    update(id, newInfo){
        Validate.validation(newInfo, this.schema);
        Validate.moreValidate(newInfo);
        return this.pupils.set(id, newInfo);
    }

    remove(id) {
        if(this.pupils.has(id)){
            this.pupils.delete(id);
        }else{
            throw new Error('there is no such pupil');
        }
    }
}