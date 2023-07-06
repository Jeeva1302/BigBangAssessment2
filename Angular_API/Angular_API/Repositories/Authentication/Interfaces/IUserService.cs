using Angular_API.Models.DTO;

namespace Angular_API.Repositories.Authentication.Interfaces
{
    public interface IUserService
    {
        Task<UserDTO> Register(UserRegisterDTO userRegisterDTO);
        Task<UserDTO> LogIN(UserDTO userDTO);
        Task<UserDTO> Update(UserRegisterDTO user);
        Task<bool> Update_Password(UserDTO userRegisterDTO);

        Task<UserRegisterDTO?> doctorRegister(UserRegisterDTO userRegisterDTO, DoctorDTO doctorDTO);

        Task<List<UserRegisterDTO>> View_All_doctorRequest(DoctorDTO doctorDTO);
        Task<UserRegisterDTO?> deletedoctorinlist(UserRegisterDTO userRegisterDTO);
    }
}
