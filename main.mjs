import { SubjectsModel, LMSModel } from './schools';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24, 
    description: 'tralala'
});

const geo = new SubjectsModel({
    title: 'Geo',
    lessons: 25
});
const geo2 = new SubjectsModel({
    title: 'Geo',
    lessons: 25
});

// will return subjectId
console.log(history);
console.log(geo.id);
console.log(geo2.id);

const lms = new LMSModel();
lms.add(history);
lms.add(geo);
// lms.remove(history);

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