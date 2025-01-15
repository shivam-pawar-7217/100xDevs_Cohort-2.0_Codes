interface User{
    readonly name:string;
    age:number; 
    readonly  id:string;
    email:string;

};

//function sumofAge(user1:User,user2:User){
//    return user1.age+user2.age;
//}
//const age=sumofAge({name:'Taro',age:20},{name:'Jiro',age:25});


type UpdateProps=Pick<User,'name'|'age'|'email'>
type UpdatePropsOptional=Partial<UpdateProps>


function updateUser(UpdateProps:UpdatePropsOptional){
    //it will to the database
}

updateUser({
    name:'ads',
    age:123
})

