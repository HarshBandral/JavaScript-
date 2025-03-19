
//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
    setTimeout(() => {
      console.log("Hi, My name is Harsh");
      setTimeout(() => {
        console.log("Hi, My lastName is Bandral");
        setTimeout(() => {
          console.log("I am 21 years old");
          setTimeout(() => {
            console.log("Hi, I like to code ");
            setTimeout(() => {
              console.log("Hi, I live in mohali");
              setTimeout(() => {
                console.log("Hi, I was born in jammu");
                setTimeout(() => {
                  console.log("Hi, I love to play chess");
                  setTimeout(() => {
                    console.log("Hi,I was a national Player in it ");
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };
  
  getStudentData();
  