export class Validate {
    static validation(data, schema) {
        if (data && typeof data === 'object' && schema && typeof schema === 'object') {
            let result = true;

            for (let property in schema) {
                if (data.hasOwnProperty(property)) {
                    let value = data[property];
                    if (typeof value === schema[property]) {
                        result = true;
                    } else if (typeof value === 'object' && !Array.isArray(value)) {
                        
                        result = Validate.validation(data[property], schema[property]);
                        if (!result) {
                            break;
                        }
                    } else if (Array.isArray(value)) {
                        for (let i = 0; i < value.length; i++) {
                            result = Validate.validation(value[i], schema[property][0]);
                            if (!result) {
                                break;
                            }
                        }
                        if (!result) {
                            break;
                        }
                    } else {
                        result = false;
                        break;
                    }
                } else {
                    throw new Error('data has not all properties');
                }
            }
            return result;
        } else {
            return false;
        }
    }
}

console.log(Validate.validation({
    name: {
        first: "John",
        last: "Doe"
    },
    image: "string",
    dateOfBirth: "31.12.2020",
    emails: [
        {
            "email": "aaa@aaa.com",
            "primary": true
        },
        {
            "email": "bbb@bbb.com",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "85868866586",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "string"
        }
    ],
    
}, {
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
  }));