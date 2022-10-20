let pro= new Promise((resolve, reject) => {
    let a = 1 * 5;
    if (a == 5) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
  
  pro.then((message) => {
    console.log(`state is resolved and ${message}`);
  }).catch((message) => {
    console.log(`state is rejected and ${message}`);
  });
  
  