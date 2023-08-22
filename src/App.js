
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-scroll';


function App() {

  const menuItems =[{
    id:1,
    title:'home'
  },
  {
    id:2,
    title:'career'
  },
  {
    id:3,
    title:'about'
  },
  {
    id:4,
    title:'contactus'
  }
]

  return (
    

    <div className='App'>
      <header>
        <nav>
          <h2>Coffee Shop</h2>

        <ul>
          {menuItems.map((menu) => {
          return  <li>
              {/* <a href={`#${menu.title}`} className='a'>{menu.title}</a> */}
              <Link to={menu.title} smooth={true} offset={-250} duration={500} className='a'>{menu.title}</Link>
            </li>
          })}
        </ul>
        </nav>
      </header>

      <main>

          {menuItems.map((menu) =>{
           return <div className='content'>
              <h1 className='content-header' id={menu.title}>Welcome <br /> to <br /> {menu.title} page</h1>
            </div>
          })}

        {/* <div className="content">
          <h1 className="content-header" id='home'>
            Welcome <br />
            to<br />
            Home page
           </h1>
           
        </div>
        <div className="content">
          <h1 className="content-header" id='career'>
            Welcome <br />
            to<br />
            Career page
           </h1>
           
        </div>
        <div className="content">
          <h1 className="content-header" id='about'>
            Welcome <br />
            to<br />
            About page
           </h1>
           
        </div>
        <div className="content">
          <h1 className="content-header" id='contactus'>
            Welcome <br />
            to<br />
            Contact us page
           </h1>
           
        </div> */}
      </main>
    </div>
     
  
    
  );
}

export default App;
