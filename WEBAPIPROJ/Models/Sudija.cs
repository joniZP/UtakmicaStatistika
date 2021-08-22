using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WEBAPIPROJ.Models
{
    [Table("Sudije")]
    public class Sudija
    {
        [Key]
        [Column("id")]
        public int id { get; set; }

        [Column("sudija")]
        public string sudija { get; set; }
        [Column("gp")]
        public string gp { get; set; }

         [JsonIgnore]
         public Utakmica Utakmica{get;set;}

    }
}