using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular_API.Models;
using Angular_API.Repositories.PatientDetailsservice;
using Angular_API.Data;

namespace Angular_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientDetailsController : ControllerBase
    {
        private readonly IPatientDetailservice _context;

        public PatientDetailsController(IPatientDetailservice context)
        {
            _context = context;
        }

        // GET: api/PatientDetails
        [HttpGet]
        public async Task<ActionResult<List<PatientDetail>>> GetPatientDetails()
        {

            return await _context.GetPatientDetails();
        }

        [HttpGet("{PatientName}")]
        public async Task<ActionResult<List<PatientDetail>>> GetPatientDetailsByname(string PatientName)
        {

            return await _context.GetPatientDetailsByname(PatientName);
        }

        // POST: api/PatientDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<List<PatientDetail>>> PostPatientDetail(PatientDetail patientDetail)
        {
            return await _context.PostPatientDetail(patientDetail);

        }

        /*
        ?// PUT: api/PatientDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatientDetail(int id, PatientDetail patientDetail)
        {
            if (id != patientDetail.PatientId)
            {
                return BadRequest();
            }

            _context.Entry(patientDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PatientDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PatientDetail>> PostPatientDetail(PatientDetail patientDetail)
        {
          if (_context.PatientDetails == null)
          {
              return Problem("Entity set 'AngularApiContext.PatientDetails'  is null.");
          }
            _context.PatientDetails.Add(patientDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatientDetail", new { id = patientDetail.PatientId }, patientDetail);
        }

        // DELETE: api/PatientDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatientDetail(int id)
        {
            if (_context.PatientDetails == null)
            {
                return NotFound();
            }
            var patientDetail = await _context.PatientDetails.FindAsync(id);
            if (patientDetail == null)
            {
                return NotFound();
            }

            _context.PatientDetails.Remove(patientDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PatientDetailExists(int id)
        {
            return (_context.PatientDetails?.Any(e => e.PatientId == id)).GetValueOrDefault();
        }*/
    }
}
