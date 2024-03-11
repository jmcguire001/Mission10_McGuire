using Microsoft.EntityFrameworkCore;

namespace IS_413___Mission_10___Backend.Data
{
    public class BowlerContext : DbContext
    {
        public BowlerContext(DbContextOptions<BowlerContext> options) : base(options)
        {
        }

        public DbSet<Bowler> Bowlers { get; set; }
    }
}