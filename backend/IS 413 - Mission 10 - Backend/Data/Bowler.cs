// Model for Bowler

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IS_413___Mission_10___Backend.Data
{
    public class Bowler
    {
        [Key]
        public int BowlerID { get; set; }
        public string? BowlerLastName { get; set; }
        public string? BowlerFirstName { get; set; }
        public string? BowlerMiddleInit { get; set; }
        // This is a foreign key that links to Team table
        [ForeignKey("TeamID")]
        public int? TeamID { get; set; }
        public Team? Team { get; set; }
        public string? BowlerAddress { get; set; }
        public string? BowlerCity { get; set; }
        public string? BowlerState { get; set; }
        public string? BowlerZip { get; set; }
        public string? BowlerPhoneNumber { get; set; }
    }
}
