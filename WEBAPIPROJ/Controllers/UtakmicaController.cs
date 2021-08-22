using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WEBAPIPROJ.Models;

namespace WEBAPIPROJ.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UtakmicaController : ControllerBase    
    {
        public UtakmicaContext Context { get; set; }
        public UtakmicaController(UtakmicaContext context)
        {
            Context=context;
        }
        [Route("PreuzmiUtakmice")]
        [HttpGet]
        public async Task<List<Utakmica>> PreuzmiUtakmice()
        {
            return await Context.Utakmice.Include(p=>p.Lokacije).Include(p=>p.Sluzbenalica).Include(p=>p.Sudije).ToListAsync();
        }

        [Route("PreuzmiSudije")]
        [HttpGet]
        public async Task<List<Sudija>> PreuzmiSudije()
        {
            return await Context.Sudije.ToListAsync();
        }
        [Route("DodajSudiju")]
        [HttpPost]
        public async Task DodajSudiju([FromBody] Sudija sudija)
        {
            Context.Sudije.Add(sudija);
            await Context.SaveChangesAsync();
        }


        [Route("PreuzmiDelegiranje")]
        [HttpGet]
        public async Task<List<Sluzbenalica>> PreuzmiDelegiranje()
        {
            return await Context.Sluzbenalica.ToListAsync();

        }

        [Route("UpisiUtakmicu")]
        [HttpPost]
        public async Task UpisiUtakmicu([FromBody] Utakmica utakmica)
        {
            Context.Utakmice.Add(utakmica);
            await Context.SaveChangesAsync();
        }
        [Route("IzmeniUtakmicu")]
        [HttpPut]
        public async Task IzmeniUtakmicu([FromBody] Utakmica utakmica)
        {
            /*var staratekma=await Context.Utakmice.FindAsync(utakmica.ID);
            staratekma.Domacin="D. Stopanje";
            staratekma.Gost="Grdelica";*/
            Context.Update<Utakmica>(utakmica);
            await Context.SaveChangesAsync();
        }
       /*  [Route("ObrisiUtakmicu")]
        [HttpDelete]
       public async Task ObrisiUtakmicu(int id)
        {
            var utakmica=Context.Utakmice.FindAsync(id);
            Context.Remove(utakmica);
            await Context.SaveChangesAsync();
        }*/

        [Route("UpisiLokacije/{idtekme}")]
        [HttpPost]
        public async Task UpisiLokaciju(int idtekme,[FromBody] Lokacija lok)
        {
            var utakmica=await Context.Utakmice.FindAsync(idtekme);
            lok.Utakmica=utakmica;
            Context.Lokacije.Add(lok);
            await Context.SaveChangesAsync();

        }
        [Route("UpisiSudije")]
        [HttpPost]
        public async Task<IActionResult> UpisiSudije([FromBody] Sluzbenalica sl)
        {
          

            if (sl.Pomocnik1==sl.Pomocnik2)
            {
                return BadRequest();
            }
            else
            {
            Context.Sluzbenalica.Add(sl);
            await Context.SaveChangesAsync();
            return Ok();
            }
           

        }
        [Route("ObrisiUtakmicu/{IDUtakmice}")]
        [HttpDelete]
        public async Task<IActionResult> ObrisiUtakmicu(int IDUtakmice)
        {
            var utakmica= Context.Utakmice.Where(p=>p.ID==IDUtakmice).FirstOrDefault();
            if(utakmica==null)
            {
                return BadRequest(new {message=$"Nema utakmice sa timIDom{IDUtakmice}"});
            }
            Context.Utakmice.Remove(utakmica);
            await Context.SaveChangesAsync();
            return Ok();

        }


        [Route("ObrisiDelegiranje/{id}")]
        [HttpDelete]
        public async Task<IActionResult> ObrisiDelegiranje(int id)
        {
            var del= Context.Sluzbenalica.Where(p=>p.ID==id).FirstOrDefault();
            if(del==null)
            {
                return BadRequest(new {message=$"Nema tog delegiranja : {id}"});
            }
            Context.Sluzbenalica.Remove(del);
            await Context.SaveChangesAsync();
            return Ok();

        }

        [Route("IzmeniLokaciju")]
        [HttpPut]
        public async Task<IActionResult> IzmeniLokaciju([FromBody] Lokacija lok)
        {
            
            Context.Update<Lokacija>(lok);
            await Context.SaveChangesAsync();
            return Ok();
        }
         [Route("IzmeniSudije")]
        [HttpPut]
        public async Task<IActionResult>  IzmeniSudije([FromBody] Sluzbenalica sl)
        {
            /*var utakmica=await Context.Utakmice.FindAsync(idtekme);
            sl.Utakmica=utakmica;*/
         

 
            if (sl.Pomocnik1==sl.Pomocnik2)
            {
               // var xy = Context.Sluzbenalica.Where(p => p.Vrsta == lok.Vrsta).FirstOrDefault();
                return BadRequest();
            }
           
            Context.Sluzbenalica.Update(sl);
            await Context.SaveChangesAsync();
            return Ok();
            

           /* var thatLok = Context.Lokacije.Where(p => p.X == lok.X && p.Y == lok.Y).FirstOrDefault();

            if (thatLok != null)
            {
                if (thatLok.MaxKapacitet < thatLok.Kapacitet + lok.Kapacitet)
                {
                    return StatusCode(406);
                }
                else if (thatLok.Vrsta != lok.Vrsta)
                {
                    return StatusCode(406);
                }
                else
                {
                    thatLok.Kapacitet += lok.Kapacitet;
                    await Context.SaveChangesAsync();
                    return Ok();
                }
            }

            if ((thatLok != null && thatLok.Kapacitet == 0) || thatLok == null)
            {
                Context.Lokacije.Add(lok);
                await Context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return StatusCode(406);
            }*/

        }


    }
    
}