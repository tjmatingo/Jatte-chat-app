import Home from './Home';
import About from "./About";
import {Link} from 'react-router-dom'

const Navbar = (props) => {

    const {children} = props;

    return (
        <div>
            <header className="bg-pink-900">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center p-3 lg:px-8">
                    <div className="flex ml-110 gap-5 justify-between">
                        <Link to="/" className="link pt-3 text-sm font-semibold text-primary hover:text-blue-200">Home</Link>

                        <a href="/" className="p-1.5 pt-0">
                            <span className="sr-only">Your Company</span>
                            <img src="/icons.svg" alt="" className="h-15 w-auto" />
                        </a>

                        <Link to="/about" className="link pt-3 text-sm font-semibold text-primary hover:text-blue-200">About</Link>
                    
                    </div>
                    
                    
                    
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="link text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </nav>
            </header>

            {children}

        </div>
    );
}
 
export default Navbar;