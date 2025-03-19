// A) .at => used to iterate array string from -ve numbers

// B) Object.hasOwn() == ObjectName.hasOwnProperty() 
    // used to check if specified obj contains indicated property as its own and if it does not contain it return false

    const lang = {
        shortForm: "Js",
        fullForm : "javascript",
    };
    console.log(lang.hasOwnProperty("shortForm"));
    console.log(lang.hasOwnProperty("short"));

    console.log(Object.hasOwn(lang,"fullForm"));


    // issue ie it doesnot work for obj created by using Object.create(null)

    const s = Object.create(null);
    console.log(typeof s);
    s.name = "harsh";
    // console.log(s.hasOwnProperty("name")); gives error that console.log(lang.hasOwnProperty("shortForm"));

    console.log(Object.hasOwn(s,"name"));