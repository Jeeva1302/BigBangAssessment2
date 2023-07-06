export interface Iappointment{
  
  appointmentId?: number,
  patientId?: number | null,
  problem: string,
  dateToVisit: string,
  timeslot: string,
  specialisationLookingFor: string,
  doctorId?: number | null,
  patientName:string,
  age:number,
  address:string,
  mobileNumber:number,
  gender:string,
 
}