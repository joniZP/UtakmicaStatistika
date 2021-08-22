using Microsoft.EntityFrameworkCore.Migrations;

namespace WEBAPIPROJ.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lokacija_Utakmica_UtakmicaID",
                table: "Lokacija");

            migrationBuilder.DropForeignKey(
                name: "FK_SLuzbena lica_Utakmica_UtakmicaID",
                table: "SLuzbena lica");

            migrationBuilder.AlterColumn<string>(
                name: "Gost",
                table: "Utakmica",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UtakmicaID",
                table: "SLuzbena lica",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UtakmicaID",
                table: "Lokacija",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateTable(
                name: "Sudije",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    sudija = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    gp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sudije", x => x.id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Lokacija_Utakmica_UtakmicaID",
                table: "Lokacija",
                column: "UtakmicaID",
                principalTable: "Utakmica",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SLuzbena lica_Utakmica_UtakmicaID",
                table: "SLuzbena lica",
                column: "UtakmicaID",
                principalTable: "Utakmica",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lokacija_Utakmica_UtakmicaID",
                table: "Lokacija");

            migrationBuilder.DropForeignKey(
                name: "FK_SLuzbena lica_Utakmica_UtakmicaID",
                table: "SLuzbena lica");

            migrationBuilder.DropTable(
                name: "Sudije");

            migrationBuilder.AlterColumn<string>(
                name: "Gost",
                table: "Utakmica",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30,
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UtakmicaID",
                table: "SLuzbena lica",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UtakmicaID",
                table: "Lokacija",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Lokacija_Utakmica_UtakmicaID",
                table: "Lokacija",
                column: "UtakmicaID",
                principalTable: "Utakmica",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SLuzbena lica_Utakmica_UtakmicaID",
                table: "SLuzbena lica",
                column: "UtakmicaID",
                principalTable: "Utakmica",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
