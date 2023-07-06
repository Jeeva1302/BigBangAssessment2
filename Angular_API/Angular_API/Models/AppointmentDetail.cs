using System;
using System.Collections.Generic;

namespace Angular_API.Data;

public partial class AppointmentDetail
{
    public int AppointmentId { get; set; }

    public int? PatientId { get; set; }

    public string? Problem { get; set; }

    public DateTime? DateToVisit { get; set; }

    public string? Timeslot { get; set; }

    public string? SpecialisationLookingFor { get; set; }

    public int? DoctorId { get; set; }

    public virtual DoctorsDetail? Doctor { get; set; }

    public virtual ICollection<FeedbackDetail> FeedbackDetails { get; set; } = new List<FeedbackDetail>();

    public virtual PatientDetail? Patient { get; set; }
}
