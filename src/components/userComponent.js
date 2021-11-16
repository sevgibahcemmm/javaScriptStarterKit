import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let userService=new UserService
let user1=new User(1,"Emrullah","Akpınar","Erzurum" )
let user2=new User(2,"Batuhan","Akpınar","Erzurum/İzmir" )
userService.add(user1)
userService.add(user2)
userService.getById(1)
userService.list()

console.log(userService.list())


let customer ={
    id:1,firstName:"Emrullah"
}
//prototyping 
customer.lastName="AKPINAR"
console.log(customer.lastName)
2:36:12