using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LINKS.Data;

namespace LINKS.Repository.Interfaces
{
   public interface IMembersRepository
    {
        IEnumerable<UserProfileDetail> Get();
        UserProfileDetail Get(int id);
        UserProfile Get(string userName);
        void Post(string userName);
    }
}
