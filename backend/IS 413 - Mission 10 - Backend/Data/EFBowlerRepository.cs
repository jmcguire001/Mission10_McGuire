// Import the EntityFrameworkCore
using Microsoft.EntityFrameworkCore;

namespace IS_413___Mission_10___Backend.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        // Create a private BowlerContext
        private BowlerContext _bowlerContext;

        // Create a constructor that takes in a BowlerContext
        public EFBowlerRepository(BowlerContext temp)
        {
            // Set the private BowlerContext to the temporary parameter passed in
            _bowlerContext = temp;
        }

        // Create a public IEnumerable of Bowlers that returns the Bowlers from the BowlerContext; this one also includes linking Team table
        public IEnumerable<Bowler> Bowlers => _bowlerContext.Bowlers.Include(b => b.Team);
        // Create a public IEnumerable of Teams that returns the Teams from the BowlerContext
        public IEnumerable<Team> Teams => _bowlerContext.Teams;
    }
}
