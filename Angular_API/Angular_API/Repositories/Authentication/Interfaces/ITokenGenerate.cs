using Angular_API.Models.DTO;
using Angular_API.Data;

namespace Angular_API.Repositories.Authentication.Interfaces
{
    public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);
    }
}
