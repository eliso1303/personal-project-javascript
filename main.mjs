import { SubjectsModel, LMSModel, TeachersModel } from './schools';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: 'tralala'
});

const geo = new SubjectsModel({
    title: 'Geo',
    lessons: 25,
    description: 'tralala'
});
const geo2 = new SubjectsModel({
    title: 'Geo',
    lessons: 25,
    description: 'tralala'
});

// will return subjectId

console.log(history);
console.log(geo.id);
console.log(geo2.id);

console.log('-------------------------');

const lms = new LMSModel();
lms.add(history);
lms.add(geo);
lms.remove(history);

console.log(lms);

// // will return true or false. Answer will be true if we added this subject to lms
console.log(lms.verify(geo));

// // will return array of registered subjects
console.log(lms.readAll());

//   [
//     {
//       subjectId: null
//     }
//   ]
console.log('-------------------------');


// {
//     "name": {
//       "first": "string",
//       "last": "string"
//     },
//     "image": "string",
//     "dateOfBirth": "string", // format date
//     "emails": [
//       {
//         "email": "string",
//         "primary": "boolean"
//       }
//     ],
//     "phones": [
//       {
//         "phone": "string",
//         "primary": "boolean"
//       }
//     ],
//     "sex": "string", // male or female
//     "subjects": [
//       {
//         "subject": "string"
//       }
//     ],
//     "description": "string",
//   }
// all fields are required, except description

// Create new Teacher from Teacher's data
let data = {
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
            "primary": 'true'
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "string"
        }
    ],
    
}

// Create new Teacher from Teacher's data
const teachers = new TeachersModel();

// Create a new teacher
const teacherId = teachers.add(data);

// will return Teachers data including teacher's id
// teachers.read(teacherId);

// will update Teacher. This method should use the same validation as a constructor method
// const teacherId = teachers.update(teacherId, updatedProfile);

// will remove techer
// teachers.remove(teacherId);