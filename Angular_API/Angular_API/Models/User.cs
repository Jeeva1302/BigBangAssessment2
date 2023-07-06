using System;
using System.Collections.Generic;

namespace Angular_API.Data;

public partial class User
{
    public int UserId { get; set; }

    public string? UserName { get; set; }

    public string EmailId { get; set; } = null!;

    public string? Role { get; set; }

    public string? Name { get; set; }

    public byte[]? Password { get; set; }

    public byte[]? HashKey { get; set; }

    public virtual ICollection<PatientDetail> PatientDetails { get; set; } = new List<PatientDetail>();
}
