namespace Angular_API.Models.DTO
{
    public class UserDTO
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string? Token { get; set; }
        public string? Role { get; set; }
    }
}
