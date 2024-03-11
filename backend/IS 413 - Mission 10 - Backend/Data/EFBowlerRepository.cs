﻿using Microsoft.EntityFrameworkCore;

namespace IS_413___Mission_10___Backend.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlerContext _bowlerContext;

        public EFBowlerRepository(BowlerContext temp)
        {
            _bowlerContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlerContext.Bowlers.Include(b => b.Team);
        public IEnumerable<Team> Teams => _bowlerContext.Teams;
    }
}
