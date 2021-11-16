import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcems/login.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1=new MongoLogger()
let userService=new UserService(logger1)

let user1=new User(1,"Emrullah","Akpınar","Erzurum" )
let user2=new User(2,"Batuhan","Akpınar","Erzurum/İzmir" )
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))
console.log(userService.getById(1))

let customer ={
    id:1,firstName:"Emrullah"
}
//prototyping 
customer.lastName="AKPINAR"
console.log(customer.lastName)
