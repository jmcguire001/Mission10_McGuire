// This is for a repository template!

namespace IS_413___Mission_10___Backend.Data
{
    // This is an interface
    public interface IBowlerRepository
    {
        // This makes sure the repository template includes Bowler and Team
        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Team> Teams { get; }
    }
}
