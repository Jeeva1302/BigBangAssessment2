using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular_API.Models;
using Angular_API.Data;

namespace Angular_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackDetailsController : ControllerBase
    {
        private readonly AngularAPIContext _context;

        public FeedbackDetailsController(AngularAPIContext context)
        {
            _context = context;
        }

        // GET: api/FeedbackDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FeedbackDetail>>> GetFeedbackDetails()
        {
          if (_context.FeedbackDetails == null)
          {
              return NotFound();
          }
            return await _context.FeedbackDetails.ToListAsync();
        }

        // GET: api/FeedbackDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FeedbackDetail>> GetFeedbackDetail(int id)
        {
          if (_context.FeedbackDetails == null)
          {
              return NotFound();
          }
            var feedbackDetail = await _context.FeedbackDetails.FindAsync(id);

            if (feedbackDetail == null)
            {
                return NotFound();
            }

            return feedbackDetail;
        }

        // PUT: api/FeedbackDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFeedbackDetail(int id, FeedbackDetail feedbackDetail)
        {
            if (id != feedbackDetail.FeedbackId)
            {
                return BadRequest();
            }

            _context.Entry(feedbackDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeedbackDetailExists(id))
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

        // POST: api/FeedbackDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FeedbackDetail>> PostFeedbackDetail(FeedbackDetail feedbackDetail)
        {
          if (_context.FeedbackDetails == null)
          {
              return Problem("Entity set 'AngularApiContext.FeedbackDetails'  is null.");
          }
            _context.FeedbackDetails.Add(feedbackDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFeedbackDetail", new { id = feedbackDetail.FeedbackId }, feedbackDetail);
        }

        // DELETE: api/FeedbackDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFeedbackDetail(int id)
        {
            if (_context.FeedbackDetails == null)
            {
                return NotFound();
            }
            var feedbackDetail = await _context.FeedbackDetails.FindAsync(id);
            if (feedbackDetail == null)
            {
                return NotFound();
            }

            _context.FeedbackDetails.Remove(feedbackDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FeedbackDetailExists(int id)
        {
            return (_context.FeedbackDetails?.Any(e => e.FeedbackId == id)).GetValueOrDefault();
        }
    }
}
