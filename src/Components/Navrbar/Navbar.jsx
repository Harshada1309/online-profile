import './Navbar.css'

const Navbar = () => {
  return (
    <div className='divnav'>
        <nav className='navbar'>
            <article className='navart'>
                <section className='navsec1'>
                    <h1>HK</h1>
                </section>
                <section className='navsec2'>
                    <div className='navsecdiv'><a href="#header">Home</a></div>
                    <div className='navsecdiv'><a href="#main">About</a></div>
                    <div className='navsecdiv'><a href="#footer">Projects</a></div>
                    <div className='navsecdiv'><a href="#footer">Contact</a></div>
                </section>
                <section className='navsec3'>
                    <div className='navicon'>
                        <a href="https://www.facebook.com/harshada.karbele.77" target='_blank'>
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div className='navicon'>
                        <a href="https://www.linkedin.com/in/harshada-karbele-122ba1223/" target='_blank'>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className='navicon'>
                        <a href="https://wa.me/99049004554" target='_blank'>
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                    <div className='navicon'>
                        <a href="https://www.instagram.com/harshada.888/" target='_blank'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </section>
            </article>
        </nav>
    </div>
  )
}

export default Navbar