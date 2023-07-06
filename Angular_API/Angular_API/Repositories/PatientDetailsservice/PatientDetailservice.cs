
using Angular_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Completion;
using Microsoft.EntityFrameworkCore;
using Angular_API.Data;

namespace Angular_API.Repositories.PatientDetailsservice
{
    public class PatientDetailservice : IPatientDetailservice
    {
        private AngularAPIContext _Context;
        public PatientDetailservice(AngularAPIContext context)
        {
            _Context = context;
        }
        public async Task<List<PatientDetail>> GetPatientDetails()
        {
            var show2 = await _Context.PatientDetails.ToListAsync();
            return show2;
        }
        public async Task<List<PatientDetail>> PostPatientDetail(PatientDetail patientDetail)
        {
            _Context.PatientDetails.Add(patientDetail);
            await _Context.SaveChangesAsync();
            return await _Context.PatientDetails.ToListAsync();

        }
        public async Task<ActionResult<List<PatientDetail>>> GetPatientDetailsByname(string PatientName)
        {
            var name = await _Context.PatientDetails.Where(val=>val.PatientName==PatientName).ToListAsync();
            if(name == null)
            {
                throw new Exception("enter name");
            }
            return name;
        }
    }
}
