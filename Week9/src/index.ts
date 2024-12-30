interface User{
  firstname:string;
  lastname:string;
  age:number
};
function islegal(user:User){
  if(user.age>18){
        return true;
    
    }else{
        return false
    }

}

function greet(user:User){
    

console.log("hi there"+user.firstname); 
}

islegal({
    firstname:"shivam",
    lastname:"pawar",
    age:20
})