using Microsoft.EntityFrameworkCore;

namespace WEBAPIPROJ.Models
{
   
    public class UtakmicaContext: DbContext
    {
         public DbSet<Utakmica> Utakmice{get;set;}//templejtska klasa nad tipom kreira properti, taj properrti je lista neceega sto se nalazi u bazi podataka
         public DbSet<Lokacija> Lokacije{get;set;}
         public DbSet<Sluzbenalica> Sluzbenalica{get;set;}
         public DbSet<Sudija> Sudije{get;set;}
         public UtakmicaContext(DbContextOptions options) : base(options)
         {
             
         }
         protected override void OnModelCreating(ModelBuilder mb)
         {
             mb.Entity<Utakmica>()
             .HasMany(p=>p.Lokacije)
             .WithOne(Lok=>Lok.Utakmica)
             .OnDelete(DeleteBehavior.Cascade);

            mb.Entity<Utakmica>()
             .HasMany(p=>p.Sluzbenalica)
             .WithOne(Lok=>Lok.Utakmica)
             .OnDelete(DeleteBehavior.Cascade);

          
         }
    }
}