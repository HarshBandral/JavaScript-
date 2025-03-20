
// Methods : Promise.all , Promise.race,Promise.allSettled

    const p1 = new Promise((resolve,reject) =>
        setTimeout(() => resolve("First"), 20));

    const p2 = new Promise((resolve,reject) =>
        setTimeout(() => reject("second"), 500));

    const p3 = new Promise((resolve,reject) =>
        setTimeout(() => resolve("third"), 2000));


        Promise.all([p1,p2,p3])
        .then((res) =>{
            console.log(res);
        })
        .catch((err) =>{
            console.log(err); 
        });


        Promise.allSettled([p1,p2,p3])
        .then((res) =>{
            console.log(res);
        })
        .catch((err) =>{
            console.log(err); 
        });


        Promise.race([p1,p2,p3])
        .then((res) =>{
            console.log(res);
        })
        .catch((err) =>{
            console.log(err); 
        });