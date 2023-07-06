using Angular_API.Models;
using Microsoft.AspNetCore.Mvc;
using Angular_API.Data;

namespace Angular_API.Repositories.PatientDetailsservice
{
    public interface IPatientDetailservice
    {
        Task<List<PatientDetail>> GetPatientDetails();

        Task<List<PatientDetail>> PostPatientDetail(PatientDetail patientDetail);

        Task<ActionResult<List<PatientDetail>>> GetPatientDetailsByname(string PatientName);
    }
}
