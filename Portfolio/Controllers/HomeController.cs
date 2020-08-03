using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Models;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            List<ArtGallery> Gallery = new List<ArtGallery>()
            {
                new ArtGallery() {Name = "Tiger", Directory = "../Style/Images/Tiger.jpg"},
                new ArtGallery() {Name = "Jaguar", Directory = "../Style/Images/Jaguar.jpg"},
                new ArtGallery() {Name = "Skull", Directory = "../Style/Images/Skull.jpg"},
                new ArtGallery() {Name = "Davy", Directory = "../Style/Images/Davy.jpg"},
                new ArtGallery() {Name = "Wren", Directory = "../Style/Images/Wren.jpg"},
                new ArtGallery() {Name = "Mackys", Directory = "../Style/Images/Mackys.jpg"}
            };

            return View(Gallery);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
        }
        
    }
}