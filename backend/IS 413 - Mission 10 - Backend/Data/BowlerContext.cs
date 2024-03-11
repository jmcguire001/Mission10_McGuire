// Import libraries
using Microsoft.EntityFrameworkCore;

namespace IS_413___Mission_10___Backend.Data
{
    // Create the BowlerContext class; it extends from the DbContext class
    public class BowlerContext : DbContext
    {
        // Create a constructor that takes in a DbContextOptions of type BowlerContext
        public BowlerContext(DbContextOptions<BowlerContext> options) : base(options)
        {
        }

        // Create a public DbSet of Bowlers
        public DbSet<Bowler> Bowlers { get; set; }
        // Create a public DbSet of Teams
        public DbSet<Team> Teams { get; set; }
    }
}