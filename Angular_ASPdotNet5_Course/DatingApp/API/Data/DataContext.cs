using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace AngularASPdotNet5Course.DatingApp.API.Data
{
    public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<AppUser> Users { get; set; }
}
}