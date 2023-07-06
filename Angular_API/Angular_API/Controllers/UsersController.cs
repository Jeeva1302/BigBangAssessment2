using Angular_API.Data;
using Angular_API.Exceptions;
using Angular_API.Models;
using Angular_API.Models.DTO;
using Angular_API.Repositories.Authentication.Interfaces;
using Angular_API.Repositories.Authentication.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace Angular_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("AngularCORS")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly DoctorDTO _doctorDTO;


        public UsersController(IUserService userService, DoctorDTO doctorDTO)
        {
            _userService = userService;
            _doctorDTO = doctorDTO;

        }
        [ProducesResponseType(typeof(User), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [HttpPost]
        public async Task<ActionResult<UserDTO>> Register(UserRegisterDTO userRegisterDTO)
        {
            try
            {
                UserDTO user = await _userService.Register(userRegisterDTO);
                if (user == null)
                    return BadRequest(new Error(2, "Registration Not Successful"));
                return Created("User Registered", user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(3, ise.Message));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(4, ex.Message));
            }
        }

        [ProducesResponseType(typeof(UserRegisterDTO), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [HttpPost("doctor")]
        public async Task<ActionResult<UserRegisterDTO?>> doctorRegister(UserRegisterDTO userRegisterDTO)
        {

            var result = await _userService.doctorRegister(userRegisterDTO, _doctorDTO);
            return Ok(result);
        }

        [ProducesResponseType(typeof(UserRegisterDTO), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [HttpPost("deleteDoctorinlist")]
        public async Task<ActionResult<UserRegisterDTO?>> deletedoctorinlist(UserRegisterDTO userRegisterDTO)
        {

            var result = await _userService.deletedoctorinlist(userRegisterDTO);
            return Ok(result);
        }

        [ProducesResponseType(typeof(List<UserRegisterDTO>), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [HttpGet]

        public async Task<ActionResult<List<UserRegisterDTO>>> View_All_doctorRequest()
        {
            var result = await _userService.View_All_doctorRequest(_doctorDTO);
            return Ok(result);

        }


        [ProducesResponseType(typeof(User), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> LogIN(UserDTO userDTO)
        {
            try
            {
                UserDTO user = await _userService.LogIN(userDTO);
                if (user == null)
                    return BadRequest(new Error(1, "Invalid UserName or Password"));
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(3, ise.Message));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(4, ex.Message));
            }
        }

        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [HttpPut("full Update")]
        public async Task<ActionResult<UserDTO>> Update(UserRegisterDTO user)
        {
            try
            {
                var myUser = await _userService.Update(user);
                if (myUser == null)
                    return NotFound(new Error(3, "Unable to Update"));
                return Created("User Updated Successfully", myUser);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(3, ise.Message));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(4, ex.Message));
            }
        }

        [ProducesResponseType(typeof(string), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status404NotFound)]//Failure Response
        [HttpPut("password change")]
        public async Task<ActionResult<string>> Update_Password(UserDTO user)
        {
            try
            {
                bool myUser = await _userService.Update_Password(user);
                if (myUser)
                    return NotFound(new Error(3, "Unable to Update Password"));
                return Ok("Password Updated Successfully");
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(3, ise.Message));
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(4, ex.Message));
            }
        }
    }
}

