using Microsoft.EntityFrameworkCore.Migrations;

namespace WEBAPIPROJ.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Utakmica",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Domacin = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Gost = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Utakmica", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Lokacija",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    x = table.Column<int>(type: "int", nullable: false),
                    Stat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Domaci = table.Column<int>(type: "int", nullable: false),
                    Gosti = table.Column<int>(type: "int", nullable: false),
                    UtakmicaID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lokacija", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Lokacija_Utakmica_UtakmicaID",
                        column: x => x.UtakmicaID,
                        principalTable: "Utakmica",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SLuzbena lica",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Glavni = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pomocnik1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pomocnik2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UtakmicaID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SLuzbena lica", x => x.ID);
                    table.ForeignKey(
                        name: "FK_SLuzbena lica_Utakmica_UtakmicaID",
                        column: x => x.UtakmicaID,
                        principalTable: "Utakmica",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Lokacija_UtakmicaID",
                table: "Lokacija",
                column: "UtakmicaID");

            migrationBuilder.CreateIndex(
                name: "IX_SLuzbena lica_UtakmicaID",
                table: "SLuzbena lica",
                column: "UtakmicaID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lokacija");

            migrationBuilder.DropTable(
                name: "SLuzbena lica");

            migrationBuilder.DropTable(
                name: "Utakmica");
        }
    }
}
