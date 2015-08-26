namespace LINKS.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("UserProfileDetail")]
    public partial class UserProfileDetail
    {
        public UserProfileDetail()
        {
            DateEntered = DateTime.Now;
            IsActive = true;
        }
        [Key]
        public int Id { get; set; }

        [ForeignKey("UserProfile")]
        public int UserId { get; set; }
        public UserProfile UserProfile { get; set; }  

        public int? MemberId { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [StringLength(50)]
        public string Company { get; set; }

        [StringLength(50)]
        public string Position { get; set; }

        [Required]
        [StringLength(50)]
        public string Address1 { get; set; }

        [StringLength(50)]
        public string Address2 { get; set; }

        [Required]
        [StringLength(50)]
        public string City { get; set; }

        [Required]
        [StringLength(2)]
        public string State { get; set; }

        [Required]
        [StringLength(5)]
        public string ZipCode { get; set; }

        [StringLength(13)]
        public string HomePhone { get; set; }

        [StringLength(13)]
        public string WorkPhone { get; set; }

        [StringLength(13)]
        public string CellPhone { get; set; }

        [StringLength(13)]
        public string FaxNumber { get; set; }

        [StringLength(50)]
        public string EmailAddress { get; set; }

        [Required]
        public DateTime? InstalledDate { get; set; }

        public DateTime? TransferredDate { get; set; }

        [Required]
        public int? Status { get; set; }

        [Required]
        public DateTime? BirthDate { get; set; }

        public int? Office { get; set; }

        public string OfficeTerm { get; set; }

        public string OfficeSort { get; set; }

        [Required]
        public DateTime DateEntered { get; set; }

        public DateTime? DateEdited { get; set; }

        [Required]
        public bool IsActive { get; set; }
         
        
    }
}
