// Write your solution in this file!
//Define objeto employee

const employee = {
   name : 'Sam',
   streetAddress : ' '  
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
   const  newobj = {...obj }; 
         newobj[key] = value ;
    
    return newobj ;
  }


 const streetAddress = updateEmployeeWithKeyAndValue(employee,'streetAddress', '11 Broadway');

 
 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
 
    obj[key] = value; 
    
   return obj;

 }

  employee = destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress', "12 Broadway");


  function deleteFromEmployeeByKey(obj, key){
    const newObj = { ...obj };
    delete newObj[key];
    
    return newObj;
    
 }

  let newObj = deleteFromEmployeeByKey(employee, 'name');


 function destructivelyDeleteFromEmployeeByKey(obj, key){

   const newObj  = { ...obj };
   delete obj[key] ;
   
   return obj ;

 }

 let newObje = destructivelyDeleteFromEmployeeByKey(employee, 'name');

 