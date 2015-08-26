namespace LINKS.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateUserProfileDetailtable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.UserProfileDetail",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false, maxLength: 50),
                        LastName = c.String(nullable: false, maxLength: 50),
                        Company = c.String(maxLength: 50),
                        Position = c.String(maxLength: 50),
                        Address1 = c.String(nullable: false, maxLength: 50),
                        Address2 = c.String(maxLength: 50),
                        City = c.String(nullable: false, maxLength: 50),
                        State = c.String(nullable: false, maxLength: 2),
                        ZipCode = c.String(nullable: false, maxLength: 5),
                        HomePhone = c.String(maxLength: 13),
                        WorkPhone = c.String(maxLength: 13),
                        FaxNumber = c.String(maxLength: 13),
                        EmailAddress = c.String(maxLength: 50),
                        InstalledDate = c.DateTime(nullable: false),
                        TransferredDate = c.DateTime(nullable: false),
                        Status = c.Int(nullable: false),
                        BirthDate = c.DateTime(nullable: false),
                        Office = c.Int(nullable: false),
                        OfficeTerm = c.String(),
                        OfficeSort = c.String(),
                        DateEntered = c.DateTime(nullable: false),
                        DateEdited = c.DateTime(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UserProfileDetail");
        }
    }
}
