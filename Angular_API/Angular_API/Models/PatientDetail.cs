using System;
using System.Collections.Generic;

namespace Angular_API.Data;

public partial class PatientDetail
{
    public int? UserId { get; set; }

    public int PatientId { get; set; }

    public string? PatientName { get; set; }

    public int? Age { get; set; }

    public string? Gender { get; set; }

    public string? Address { get; set; }

    public long? MobileNumber { get; set; }

    public string? TypeOfPatient { get; set; }

    public virtual ICollection<AppointmentDetail> AppointmentDetails { get; set; } = new List<AppointmentDetail>();

    public virtual User? User { get; set; }
}
