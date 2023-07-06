using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular_API.Models;
using Angular_API.Repositories.AppointmentDetailsservice;
using Angular_API.Data;

namespace Angular_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentDetailsController : ControllerBase
    {
        private readonly IAppointmentDetailservice _context;

        public AppointmentDetailsController(IAppointmentDetailservice context)
        {
            _context = context;
        }

        

        [HttpPost]
        public async Task<ActionResult<List<AppointmentDetail>>> PostAppointmentDetail(AppointmentDetail appointmentDetail)
        {
            return await _context.PostAppointmentDetail(appointmentDetail);

        }

       

        [HttpGet]
        public async Task<ActionResult<List<AppointmentDetail>>> GetAppointmentDetails()
        {

            return await _context.GetAppointmentDetails();
        }

        [HttpDelete("{id}")]
        public async Task<String> DeleteAppointmentDetail(int id)
        {
            return await _context.DeleteAppointmentDetail(id);

        }

    }
}
