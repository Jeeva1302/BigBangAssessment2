using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular_API.Data;
using Angular_API.Models;
using Microsoft.AspNetCore.Authorization;
using Angular_API.Repositories.DoctorDetailsservice;

namespace Angular_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsDetailsController : ControllerBase
    {
        private readonly AngularAPIContext _context;

        public DoctorsDetailsController(AngularAPIContext context)
        {
            _context = context;
        }

        

        // GET: api/DoctorsDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorsDetail>>> GetDoctorsDetails()
        {
          if (_context.DoctorsDetails == null)
          {
              return NotFound();
          }
            return await _context.DoctorsDetails.ToListAsync();
        }

        // GET: api/DoctorsDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorsDetail>> GetDoctorsDetail(int id)
        {
          if (_context.DoctorsDetails == null)
          {
              return NotFound();
          }
            var doctorsDetail = await _context.DoctorsDetails.FindAsync(id);

            if (doctorsDetail == null)
            {
                return NotFound();
            }

            return doctorsDetail;
        }

        // PUT: api/DoctorsDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctorsDetail(int id, DoctorsDetail doctorsDetail)
        {
            DoctorsDetail dtt = await _context.DoctorsDetails.FirstOrDefaultAsync(x=>x.DoctorId==id);

            if (dtt == null)
            {
                return NotFound();
            }

           
            dtt.DoctorName = doctorsDetail.DoctorName;
            dtt.Gender = doctorsDetail.Gender;
            dtt.SpecialisedIn = doctorsDetail.SpecialisedIn;
            dtt.Address = doctorsDetail.Address;
            dtt.MobileNumber = doctorsDetail.MobileNumber;
            dtt.EmailId = doctorsDetail.EmailId;
            dtt.ConsultingFees = doctorsDetail.ConsultingFees;
            dtt.WorkingHours = doctorsDetail.WorkingHours;

            await _context.SaveChangesAsync();

            return NoContent();
        }

       

        // POST: api/DoctorsDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DoctorsDetail>> PostDoctorsDetail(DoctorsDetail doctorsDetail)
        {
          if (_context.DoctorsDetails == null)
          {
              return Problem("Entity set 'AngularApiContext.DoctorsDetails'  is null.");
          }
            _context.DoctorsDetails.Add(doctorsDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDoctorsDetail", new { id = doctorsDetail.DoctorId }, doctorsDetail);
        }

        // DELETE: api/DoctorsDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctorsDetail(int id)
        {
            var doctor = _context.DoctorsDetails
            .Include(d => d.AppointmentDetails) // Include the related AppointmentDetails
                .ThenInclude(a => a.FeedbackDetails) // Include the related FeedbackDetails
            .FirstOrDefault(d => d.DoctorId == id);

            if (doctor == null)
            {
                return NotFound(); // Handle case where doctor is not found
            }

            _context.Entry(doctor).State = EntityState.Deleted;
            _context.SaveChanges();

            return Ok();
        }

        private bool DoctorsDetailExists(int id)
        {
            return (_context.DoctorsDetails?.Any(e => e.DoctorId == id)).GetValueOrDefault();
        }
    }
}
