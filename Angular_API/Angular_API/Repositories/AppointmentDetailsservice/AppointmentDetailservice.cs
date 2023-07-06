
using Angular_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular_API.Data;

namespace Angular_API.Repositories.AppointmentDetailsservice
{
    public class AppointmentDetailservice : IAppointmentDetailservice
    {
        private AngularAPIContext _Context;

        object IAppointmentDetailservice.AppointmentDetails { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public AppointmentDetailservice(AngularAPIContext context)
        {
            _Context = context;
        }
      
        public async Task<List<AppointmentDetail>> PostAppointmentDetail(AppointmentDetail appointmentDetail)
        {
            _Context.AppointmentDetails.Add(appointmentDetail);
            await _Context.SaveChangesAsync();
            return await _Context.AppointmentDetails.ToListAsync();

        }

        public async Task<ActionResult<List<AppointmentDetail>>> GetAppointmentDetails()
        {
            var show2 = await _Context.AppointmentDetails.ToListAsync();
            return show2;
        }

        public async Task<String> DeleteAppointmentDetail(int id)
        {
            var appointment = await _Context.AppointmentDetails.FirstOrDefaultAsync(x => x.AppointmentId == id);
            _Context.Remove(appointment);
            _Context.SaveChanges();
            return "Deleted Successfully";
        }
    }
}
