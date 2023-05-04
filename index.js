// // declare a object, get and set values of oject


// let student = { name: "Test" };
// // get and Set the Values
// function getStudent() {
//     return student;
// }
// function setStudent(params) {
//     student = params
// }
// setStudent({ name: "Ayeza", age: 20, CGPA: 1.3 })

// function checkAge(params) {
//     const newStud = getStudent()
//     if (newStud.age < params) {
//         console.log("Underage");
//     } else if (newStud.age > params) {
//         console.log("Overage");
//     } else {
//         console.log("Perfect");
//     }
// }

// checkAge(22)

// const person = [{ name: "Ayeza", age: 20, CGPA: 1.3 },
// { name: "Ayeza", age: 20, CGPA: 1.3 },
// { name: "Ayeza", age: 20, CGPA: 1.3 },
// { name: "Ayeza", age: 20, CGPA: 1.3 },
// { name: "Ayeza", age: 20, CGPA: 1.3 },
// { name: "Ayeza", age: 20, CGPA: 1.3 },
// { name: "Ayeza", age: 20, CGPA: 1.3 },
// { name: "Ayeza", age: 20, CGPA: 1.3 }];
// highestIndex= 7
// arr.length = highestIndex+1
// console.log(person.length);
// 
//      let i=0; i<=arr.length; i++ (++i)(i=i+1)
// for (initialization; condition; increment/decrement )
// for(let index=0;person.length)
// i = 8
// for (let i = 0; i < person.length; i++) {
//     console.log(person[i]);
// }



let person = {
    status: "success",
    post: {
      results: [
        {
          createdBy: "644d5c176c76ae77f30a92f8",
          content: "This is My First Post, Let's say it's a Hello World Post",
          mentions: [
            {
              user: {
                firstName: "Test",
                lastName: "User",
                email: "mailto:a@a.com",
                id: "644e0b8a40d13c6a9123de97"
              },
              userName: "testUser",
              profileImage: "",
              bio: "I am a software developer.",
              gender: "Male",
              website: "https://test.com",
              id: "644e0c0ab968a86e55eac84a"
            }
          ],
          taggedUsers: [
            {
              user: {
                firstName: "Test",
                lastName: "User",
                email: "mailto:a@a.com",
                id: "644e0b8a40d13c6a9123de97"
              },
              userName: "testUser",
              profileImage: "",
              bio: "I am a software developer.",
              gender: "Male",
              website: "https://test.com",
              id: "644e0c0ab968a86e55eac84a"
            }
          ],
          tags: [
            {
              userId: "644d5c176c76ae77f30a92f8",
              tag: "#StartingMyDay",
              count: 3,
              id: "644e0c9ab968a86e55eac856"
            }
          ],
          media: [
            {
              mediaId: "644d5c176c76ae77f30a92f8_1682792971804.png",
              mediaType: "image/png",
              mediaUrl: "http://localhost:5000/posts/images/644d5c176c76ae77f30a92f8_1682792971804.png",
              mediaSize: "81837",
              id: "644d620b996e6053d02e0020"
            },
            {
              mediaId: "644d5c176c76ae77f30a92f8_1682792971807.gif",
              mediaType: "image/gif",
              mediaUrl: "http://localhost:5000/posts/images/644d5c176c76ae77f30a92f8_1682792971807.gif",
              mediaSize: "111830",
              id: "644d620b996e6053d02e0021"
            }
          ],
          likes: [],
          comments: [],
          id: "644e5cbdc6ae096e4e988ccf"
        },
        {
          createdBy: "644d5c176c76ae77f30a92f8",
          content: "This is My First Post, Let's say it's a Hello World Post",
          mentions: [
            {
              user: {
                firstName: "Test",
                lastName: "User",
                email: "mailto:a@a.com",
                id: "644e0b8a40d13c6a9123de97"
              },
              userName: "testUser",
              profileImage: "",
              bio: "I am a software developer.",
              gender: "Male",
              website: "https://test.com",
              id: "644e0c0ab968a86e55eac84a"
            }
          ],
          taggedUsers: [
            {
              user: {
                firstName: "Test",
                lastName: "User",
                email: "mailto:a@a.com",
                id: "644e0b8a40d13c6a9123de97"
              },
              userName: "testUser",
              profileImage: "",
              bio: "I am a software developer.",
              gender: "Male",
              website: "https://test.com",
              id: "644e0c0ab968a86e55eac84a"
            }
          ],
          tags: [
            {
              userId: "644d5c176c76ae77f30a92f8",
              tag: "#StartingMyDay",
              count: 3,
              id: "644e0c9ab968a86e55eac856"
            }
          ],
          media: [
            {
              mediaId: "644d5c176c76ae77f30a92f8_1682792971804.png",
              mediaType: "image/png",
              mediaUrl: "http://localhost:5000/posts/images/644d5c176c76ae77f30a92f8_1682792971804.png",
              mediaSize: "81837",
              id: "644d620b996e6053d02e0020"
            },
            {
              mediaId: "644d5c176c76ae77f30a92f8_1682792971807.gif",
              mediaType: "image/gif",
              mediaUrl: "http://localhost:5000/posts/images/644d5c176c76ae77f30a92f8_1682792971807.gif",
              mediaSize: "111830",
              id: "644d620b996e6053d02e0021"
            }
          ],
          likes: [
            {
              _id: "644e0c0ab968a86e55eac84a"
            }
          ],
          comments: [],
          id: "644ff02c2725d1fb204d88ae"
        }
      ],
      page: 1,
      limit: 10,
      totalPages: 1,
      totalResults: 2
    }
  }

const filterPerson = (filterBy) => {
    // const newPerson = person.filter((per) => per.name === filterBy || per.age === filterBy)
    // for (const key in person) {
    //     const newPerson = person[key].filter((per) => per.name === filterBy || per.age === filterBy)
    // }
    // const newPerson = person.data.filter((per) => per.name === filterBy || per.age === filterBy)
    // console.log(newPerson);

    for (const iterator in person.post.results) {
        console.log(person.post.results[iterator].likes);
    }
}


filterPerson()