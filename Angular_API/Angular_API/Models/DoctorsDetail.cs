using System;
using System.Collections.Generic;

namespace Angular_API.Data;

public partial class DoctorsDetail
{
    public int DoctorId { get; set; }

    public string? DoctorName { get; set; }

    public string? Gender { get; set; }

    public string? SpecialisedIn { get; set; }

    public string? Address { get; set; }

    public long? MobileNumber { get; set; }

    public string? EmailId { get; set; }

    public decimal? ConsultingFees { get; set; }

    public string? WorkingHours { get; set; }

    public virtual ICollection<AppointmentDetail> AppointmentDetails { get; set; } = new List<AppointmentDetail>();
}
