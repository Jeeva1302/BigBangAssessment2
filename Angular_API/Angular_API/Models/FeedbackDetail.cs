using System;
using System.Collections.Generic;

namespace Angular_API.Data;

public partial class FeedbackDetail
{
    public int FeedbackId { get; set; }

    public int? AppointmentId { get; set; }

    public int? BookingSatisfaction { get; set; }

    public int? CheckinSatisfaction { get; set; }

    public string? AppointmentPassed { get; set; }

    public string? AppointmentDuration { get; set; }

    public int? HospitalHygiene { get; set; }

    public int? MedicalPersonnelKindness { get; set; }

    public int? DoctorCare { get; set; }

    public int? RecommendLikelihood { get; set; }

    public string? Comments { get; set; }

    public virtual AppointmentDetail? Appointment { get; set; }
}
