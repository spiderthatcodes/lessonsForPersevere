const studentInfo = {
  fullName: 'Jane Doe',
  age: 30,
  moduleCompleted: 'ES6',
  cohort: 3,
  releaseDate: 'December 10, 2022',
  absences: 4,
};

console.log(`Developer ${studentInfo.fullName} will be released on ${studentInfo.releaseDate}`);

const { fullName, age, moduleCompleted } = studentInfo;

console.log(`The student's name is ${fullName}, they are ${age} years old, and they have completed ${moduleCompleted}`);

const studentNames = [
  'Anne',
  'Beatrice',
  'Camille',
  'Daria',
  'Eloise',
  'Faraday',
];
const [ studentA, studentB, studentC, studentD, studentE, studentF ] = studentNames;

console.log(studentD);

const editName = (studentNames, position, newName) => {
  let [studentA, studentB, studentC, studentD, studentE, studentF] =
    studentNames;
  switch (position) {
    case 'A':
      studentA = newName;
      console.log(studentA);
      break;

    default:
      break;
  }

  return studentNames;
};

editName(studentNames, "A", "Agatha");

const teacherInfo = {
  fullTeacherName: 'Jessica Dickerson',
  techSkills: {
    languages: 'JavaScript, Java, Python',
    frameworks: 'React, Angular, Django, Spring',
  },
  contactInfo: {
    phone: {
      mobile: '602-555-5555',
      home: '480-999-9999',
    },
    email: {
      personal: 'thisisnotarealemailaddress@nope.com',
      work: 'amoreprofessionalfakeemailaddress@stillnope.org',
    },
    address: '1234 N Seriously This Is Fake St, Phoenix, AZ, 85555',
  },
};

const { fullTeacherName } = teacherInfo;
let {
    techSkills: { languages: codingLanguages },
} = teacherInfo;

console.log(fullTeacherName);
console.log(codingLanguages);


const editMobileNumber = (teacher, newMobile) => {
    let {
        contactInfo: { phone: {mobile: mobileNumber} },
    } = teacher;
    mobileNumber = newMobile;

    console.log(mobileNumber)
    return mobileNumber;
}

editMobileNumber(teacherInfo, "666-666-6666");