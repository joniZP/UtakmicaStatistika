using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WEBAPIPROJ.Models
{
    [Table("Utakmica")]
    public class Utakmica
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

         [Column("Domacin")]
         [MaxLength(30)]
         
        public string Domacin { get; set; }

        [Column("Gost")]
        [MaxLength(30)]
        public string Gost { get; set; }


       public virtual List<Lokacija> Lokacije { get; set; }
      public virtual List<Sluzbenalica> Sluzbenalica { get; set; }
      public virtual List<Sudija> Sudije{ get; set; }

    }
}