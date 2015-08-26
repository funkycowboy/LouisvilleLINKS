using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LINKS.Data;
using LINKS.Repository.Interfaces;

namespace LINKS.Repository
{
    public class MembersRepository : IMembersRepository
    {
        private LINKSModel _context;
        public MembersRepository(LINKSModel context)
        {
            _context = context;
        }

        public IEnumerable<UserProfileDetail> Get()
        {
            return _context.UserProfileDetails.ToList();
        }

        public UserProfileDetail Get(int id)
        {
            return _context.UserProfileDetails.FirstOrDefault(x => x.UserId == id);
        }

        public UserProfile Get(string userName)
        {
            return _context.UserProfiles.FirstOrDefault(x => x.UserName.ToLower() == userName);
        }

        public void Post(string userName)
        {
            _context.UserProfiles.Add(new UserProfile { UserName = userName });
            _context.SaveChanges();
        }
    }
}
