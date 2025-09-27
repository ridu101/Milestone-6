const student ={
    name: "John Doe",   
    age: 20,
    major: "Computer Science",
    family: {
        father: "Richard Roe",
        mother: "Jane Doe",
        // siblings:{
        //     brother: "Jim Doe",
        //     sister: "Jill Doe"
        // }
    },
    courses: ["CS101", "MATH123", "HIST202"],
    gpa: 3.5,
    1:50
}

console.log(student.family.siblings?.brother);