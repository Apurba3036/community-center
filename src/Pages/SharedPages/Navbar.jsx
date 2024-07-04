
import { Link } from 'react-router-dom';

const Navbar = () => {

  
    
  



    const navitems = (
        <>
            <li><Link className='font-bold text-white' to="/">Home</Link></li>
            <li><Link className='font-bold text-white' to="/about">About Us</Link></li>
            <li><Link className='font-bold text-white' to="/member">Team Members</Link></li>
            <li><Link className='font-bold text-white' to="/services">Services</Link></li>
            <li><Link className='font-bold text-white' to="">Blogs</Link></li>
            <li><Link className='font-bold text-white' to="/contact">Contacts</Link></li>

          
        </>
    );
    return (
        <div className="navbar bg-base-100 h-24 max-w-6xl mx-auto md:fixed md:bg-black md:z-10 md:bg-opacity-30 md:text-white" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                         {navitems}
                    </ul>
                </div>
                <Link to='/' className="w-10 rounded-full">
                    <img alt="" src="https://media.licdn.com/dms/image/D560BAQGR9QHncJ_Xxg/company-logo_200_200/0/1708973263709/the_attention_network_99_logo?e=2147483647&v=beta&t=yvNcEVSqARJUIeg9tJ9vfX0NE_vlMpmOM7rAykShDBM" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end">
               {
               <Link to="/login" className="btn btn-outline btn-warning">Login</Link>
               }
            </div>
        </div>
    );
};

export default Navbar;