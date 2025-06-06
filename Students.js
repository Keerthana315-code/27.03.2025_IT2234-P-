let students = [
    { regno: "2021/ICT/01", name: "James", age: 21, course: "IT", Pro_languages: ["Java", "JS", "C++"] },
    { regno: "2021/ICT/02", name: "Sophia", age: 22, course: "CS", Pro_languages: ["Python", "C", "Go"] },
    { regno: "2021/ICT/03", name: "Michael", age: 23, course: "Software Engineering", Pro_languages: ["C#", "JavaScript", "Swift"] },
    { regno: "2021/ICT/04", name: "Emma", age: 21, course: "Data Science", Pro_languages: ["Python", "R", "SQL"] },
    { regno: "2021/ICT/05", name: "Daniel", age: 22, course: "Cybersecurity", Pro_languages: ["Ruby", "Bash", "C"] }
];

function getUniqueLanguages(students) {
    let languagesSet = new Set();
    students.forEach(student => {
        student.Pro_languages.forEach(lang => {
            languagesSet.add(lang.replace("JS", "JavaScript")); // Normalize JavaScript
        });
    });
    return Array.from(languagesSet);
}

// Example usage:
console.log(getUniqueLanguages(students));
// Output: [ 'Java', 'JavaScript', 'C++', 'Python', 'C', 'Go', 'Swift', 'R', 'SQL', 'Ruby', 'Bash' ]
