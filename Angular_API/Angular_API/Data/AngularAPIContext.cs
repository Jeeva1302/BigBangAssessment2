using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Angular_API.Data;

public partial class AngularAPIContext : DbContext
{
    public AngularAPIContext()
    {
    }

    public AngularAPIContext(DbContextOptions<AngularAPIContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AppointmentDetail> AppointmentDetails { get; set; }

    public virtual DbSet<DoctorsDetail> DoctorsDetails { get; set; }

    public virtual DbSet<FeedbackDetail> FeedbackDetails { get; set; }

    public virtual DbSet<PatientDetail> PatientDetails { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("data source =  .\\SQLEXPRESS; initial catalog =Angular_API; integrated security=SSPI;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AppointmentDetail>(entity =>
        {
            entity.HasKey(e => e.AppointmentId).HasName("PK__Appointm__8ECDFCA25B5A28B6");

            entity.ToTable("Appointment_Details");

            entity.Property(e => e.AppointmentId).HasColumnName("AppointmentID");
            entity.Property(e => e.DateToVisit)
                .HasColumnType("date")
                .HasColumnName("Date_to_visit");
            entity.Property(e => e.DoctorId).HasColumnName("DoctorID");
            entity.Property(e => e.Problem).HasMaxLength(100);
            entity.Property(e => e.SpecialisationLookingFor)
                .HasMaxLength(30)
                .HasColumnName("Specialisation_Looking_for");
            entity.Property(e => e.Timeslot).HasMaxLength(30);

            entity.HasOne(d => d.Doctor).WithMany(p => p.AppointmentDetails)
                .HasForeignKey(d => d.DoctorId)
                .HasConstraintName("fk_DoctorDetail");

            entity.HasOne(d => d.Patient).WithMany(p => p.AppointmentDetails)
                .HasForeignKey(d => d.PatientId)
                .HasConstraintName("fk_appointmentdetail");
        });

        modelBuilder.Entity<DoctorsDetail>(entity =>
        {
            entity.HasKey(e => e.DoctorId).HasName("PK__Doctors___2DC00EDF8085FF4C");

            entity.ToTable("Doctors_Details");

            entity.Property(e => e.DoctorId).HasColumnName("DoctorID");
            entity.Property(e => e.Address).HasColumnType("text");
            entity.Property(e => e.ConsultingFees)
                .HasColumnType("money")
                .HasColumnName("consulting_fees");
            entity.Property(e => e.DoctorName)
                .HasMaxLength(30)
                .HasColumnName("Doctor_Name");
            entity.Property(e => e.EmailId).HasMaxLength(233);
            entity.Property(e => e.Gender)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.MobileNumber).HasColumnName("Mobile_number");
            entity.Property(e => e.SpecialisedIn)
                .HasMaxLength(30)
                .HasColumnName("Specialised_in");
            entity.Property(e => e.WorkingHours)
                .HasMaxLength(30)
                .HasColumnName("Working_hours");
        });

        modelBuilder.Entity<FeedbackDetail>(entity =>
        {
            entity.HasKey(e => e.FeedbackId).HasName("PK__Feedback__6A4BEDD68F2D0B1D");

            entity.ToTable("Feedback_Details");

            entity.Property(e => e.AppointmentDuration)
                .HasMaxLength(30)
                .HasColumnName("appointment_duration");
            entity.Property(e => e.AppointmentPassed)
                .HasMaxLength(30)
                .HasColumnName("appointment_passed");
            entity.Property(e => e.BookingSatisfaction).HasColumnName("booking_satisfaction");
            entity.Property(e => e.CheckinSatisfaction).HasColumnName("checkin_satisfaction");
            entity.Property(e => e.Comments)
                .HasColumnType("text")
                .HasColumnName("comments");
            entity.Property(e => e.DoctorCare).HasColumnName("doctor_care");
            entity.Property(e => e.HospitalHygiene).HasColumnName("hospital_hygiene");
            entity.Property(e => e.MedicalPersonnelKindness).HasColumnName("medical_personnel_kindness");
            entity.Property(e => e.RecommendLikelihood).HasColumnName("recommend_likelihood");

            entity.HasOne(d => d.Appointment).WithMany(p => p.FeedbackDetails)
                .HasForeignKey(d => d.AppointmentId)
                .HasConstraintName("fk_FeedbackDetail");
        });

        modelBuilder.Entity<PatientDetail>(entity =>
        {
            entity.HasKey(e => e.PatientId).HasName("PK__Patient___970EC366BA23AB07");

            entity.ToTable("Patient_Details");

            entity.Property(e => e.Address).HasColumnType("text");
            entity.Property(e => e.Gender).HasMaxLength(30);
            entity.Property(e => e.MobileNumber).HasColumnName("Mobile_Number");
            entity.Property(e => e.PatientName)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("Patient_Name");
            entity.Property(e => e.TypeOfPatient)
                .HasMaxLength(30)
                .HasColumnName("Type_of_Patient");

            entity.HasOne(d => d.User).WithMany(p => p.PatientDetails)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("fk_PatientDetail");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4CB9A574D9");

            entity.Property(e => e.EmailId).HasMaxLength(233);
            entity.Property(e => e.Role)
                .HasMaxLength(25)
                .IsUnicode(false);
            entity.Property(e => e.UserName).HasMaxLength(30);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
