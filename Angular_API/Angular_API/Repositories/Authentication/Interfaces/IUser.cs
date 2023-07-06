using Angular_API.Models.DTO;
using Angular_API.Models;
using Angular_API.Data;

namespace Angular_API.Repositories.Authentication.Interfaces
{
    public interface IUser
    {
        Task<User> Add(User user);
        Task<User> Update(User user);
        User Delete(UserDTO userDTO);
        Task<User> Get(UserDTO userDTO);
        Task<List<User>?> GetAll();
    }
}

