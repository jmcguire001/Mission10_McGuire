// Import libraries
using IS_413___Mission_10___Backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IS_413___Mission_10___Backend.Controllers
{
    // Set the route for the controller
    [Route("[controller]")]
    [ApiController]
    // Create the BowlerController; it extends from the ControllerBase class
    public class BowlerController : ControllerBase
    {
        // Create a private IBowlerRepository
        private IBowlerRepository _bowlerRepository;

        // Create a constructor that takes in an IBowlerRepository
        public BowlerController(IBowlerRepository temp)
        {
            // Set the private IBowlerRepository to the temporary parameter passed in
            _bowlerRepository = temp;
        }

        // Create a method that returns an IEnumerable of Bowlers
        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            // Create a variable that stores the Bowler data as an array
            var bowlerData = _bowlerRepository.Bowlers.ToArray();

            return bowlerData;
        }
    }
}
