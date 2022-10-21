let pro= new Promise((resolve, reject) => {
      resolve("Success");
      reject("Failed");
     });
  
  pro.then((message) => {
    console.log(`state is resolved and ${message}`);
  }).catch((message) => {
    console.log(`state is rejected and ${message}`);
  });
  
  
