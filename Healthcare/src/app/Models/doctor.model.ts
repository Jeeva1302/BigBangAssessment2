import { UserModel } from "./user.model";


export class DoctorModel
{
    constructor(public id:number= 0,
        public name:string="",
        public emailId:string="",
        public userName:string="",
        public phoneNumber:string="",
        public address:string="",
        public userPassword:string="",
        public role:string="",

        public user:UserModel=new UserModel()){

        }
  
}