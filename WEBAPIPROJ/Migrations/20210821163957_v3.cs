using Microsoft.EntityFrameworkCore.Migrations;

namespace WEBAPIPROJ.Migrations
{
    public partial class v3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UtakmicaID",
                table: "Sudije",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sudije_UtakmicaID",
                table: "Sudije",
                column: "UtakmicaID");

            migrationBuilder.AddForeignKey(
                name: "FK_Sudije_Utakmica_UtakmicaID",
                table: "Sudije",
                column: "UtakmicaID",
                principalTable: "Utakmica",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sudije_Utakmica_UtakmicaID",
                table: "Sudije");

            migrationBuilder.DropIndex(
                name: "IX_Sudije_UtakmicaID",
                table: "Sudije");

            migrationBuilder.DropColumn(
                name: "UtakmicaID",
                table: "Sudije");
        }
    }
}
