let pro= new Promise((resolve, reject) => {
      resolve("Success");
     });
  
  pro.then((message) => {
    console.log(`state is resolved and ${message}`);
  });
 
  
  
