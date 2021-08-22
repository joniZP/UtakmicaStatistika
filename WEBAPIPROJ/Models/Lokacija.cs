using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WEBAPIPROJ.Models
{
    [Table("Lokacija")]
     public class Lokacija
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }
        
        [Column("x")]

        public int x { get; set; }

         /*[Column("Tip")]
         public string Tip { get; set; }*/
         [Column("Stat")]
         [DataType("nvarchar(255)")]
         public string Stat{get;set;}

         [Column("Domaci")]
         [DataType("int")]
         public int Domaci{get;set;}

         [Column("Gosti")]
         [DataType("int")]

         public int Gosti{get;set;}

         [JsonIgnore]
         public Utakmica Utakmica{get;set;}

        [ForeignKey("UtakmicaID")]
        public int UtakmicaID { get; set; }



    }
}