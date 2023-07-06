using Angular_API.Models;
using Microsoft.AspNetCore.Mvc;
using Angular_API.Data;

namespace Angular_API.Repositories.AppointmentDetailsservice
{
    public interface IAppointmentDetailservice
    {
        object AppointmentDetails { get; set; }

        Task<List<AppointmentDetail>> PostAppointmentDetail(AppointmentDetail appointmentDetail);

        Task<ActionResult<List<AppointmentDetail>>> GetAppointmentDetails();

        Task<String> DeleteAppointmentDetail(int id);
    }
}
