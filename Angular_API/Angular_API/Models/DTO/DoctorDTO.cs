namespace Angular_API.Models.DTO
{
    public class DoctorDTO
    {
        public List<UserRegisterDTO> doctorList { get; set; }
        public object GlobalObject { get; set; }
        public DoctorDTO()
        {
            doctorList = new List<UserRegisterDTO>();
        }
        /*public void AddStaff(UserRegisterDTO staff)
        {
            staffList.Add(staff);
        }
        */
        public void get(DoctorDTO dto)
        {
            GlobalObject = dto;
        }
        public object GetDoctorList()
        {
            return GlobalObject;
        }
    }
}
