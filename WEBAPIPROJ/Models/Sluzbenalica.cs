using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WEBAPIPROJ.Models
{  
     [Table("SLuzbena lica")]
     public class Sluzbenalica
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        [Column("Glavni")]
        
        public string Glavni { get; set; }
        [Column("Pomocnik1")]
        public string Pomocnik1 { get; set; }
        [Column("Pomocnik2")]
        public string Pomocnik2 { get; set; }
        [JsonIgnore]
        public Utakmica Utakmica{get;set;}

        [ForeignKey("UtakmicaID")]
        public int UtakmicaID { get; set; }

    }
}