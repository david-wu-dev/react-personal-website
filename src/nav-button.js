import React from 'react';
// import { DropdownButton } from 'react-bootstrap'
// import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {Link} from "react-scroll";
import './nav-button.css'



class NavButtons extends React.Component{

  
    render() {
        return (
            <div id='navigation'>
              <ul id="nav-buttons">
                <li className='nav-link'><Link
                  activeClass="active"
                  to="contact"
                  smooth={true}
                  duration={500}
                  >
                    contact
                  </Link>
                </li>
                <li className='nav-link'><Link
                  activeClass="active"
                  to="project"
                  smooth={true}
                  duration={500}
                  >
                    projects
                  </Link>
                </li>
                <li className='nav-link'><Link
                  activeClass="active"
                  to="about"
                  smooth={true}
                  duration={500}
                  >
                    about
                  </Link>
                </li>
                <li className='nav-link'><Link
                  activeClass="active"
                  to="home"
                  smooth={true}
                  duration={500}
                  >
                    home
                  </Link>
                </li>
                {/* <li><a href="http://localhost:3000/contact">contact</a></li>
                <li>
                  <DropdownButton id="dropdown-button" title="projects">
                    <DropdownItem id="drop" href="http://localhost:3000/projects/mnist-gan">
                      DCGAN Project
                    </DropdownItem>
                    <DropdownItem id="drop" href="http://localhost:3000/projects/stock-rl">
                      RL Stock Project
                    </DropdownItem>
                  </DropdownButton>
                </li>
                <li><a href="http://localhost:3000/projects">about</a></li>
                <li><a href="http://localhost:3000/">home</a></li> */}
              </ul>
            </div>
        )
    }
}

export default NavButtons