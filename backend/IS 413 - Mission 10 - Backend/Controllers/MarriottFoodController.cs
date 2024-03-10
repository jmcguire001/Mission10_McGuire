using IS_413___Mission_10___Backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IS_413___Mission_10___Backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MarriottFoodController : ControllerBase
    {
        private IFoodRepository _foodRepository;

        public MarriottFoodController(IFoodRepository temp)
        {
            _foodRepository = temp;
        }

        [HttpGet]
        public IEnumerable<MarriottFood> Get()
        {
            var foodData = _foodRepository.Foods.ToArray();

            return foodData;
        }
    }
}
