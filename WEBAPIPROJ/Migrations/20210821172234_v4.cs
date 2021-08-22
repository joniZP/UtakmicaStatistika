using Microsoft.EntityFrameworkCore.Migrations;

namespace WEBAPIPROJ.Migrations
{
    public partial class v4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lokacija_Utakmica_UtakmicaID",
                table: "Lokacija");

            migrationBuilder.DropForeignKey(
                name: "FK_SLuzbena lica_Utakmica_UtakmicaID",
                table: "SLuzbena lica");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lokacija_Utakmica_UtakmicaID",
                table: "Lokacija");

            migrationBuilder.DropForeignKey(
                name: "FK_SLuzbena lica_Utakmica_UtakmicaID",
                table: "SLuzbena lica");

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
    }
}
