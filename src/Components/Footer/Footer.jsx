import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <section className='footersec'>
        <div className='footdiv1'>
          <center>
          <h4 className='foothead'>GET IN TOUCH</h4><br />
          <p>harshadakarbele1309@gmail.com</p><br />
          <p>+919049004554</p>
          </center>
        </div>
        
        <div className="footdiv2">
          <article>
          <center>
            <h2>Projects</h2>
          </center>
          </article>
          <article className='art2'>
          <h6>
            <button id='headerbttn'>
              <a href="https://weatherdetector.vercel.app/">Weather App</a>
            </button>
          </h6>
          <h6>
            <button id='headerbttn'>
              <a href="https://crud-tau-peach.vercel.app/">Crud App</a>
            </button>
          </h6>
          <h6>
            <button id='headerbttn'>
              <a href="https://contact-form-three-xi.vercel.app/">Contact form</a>
            </button>
          </h6>
          <h6>
            <button id='headerbttn'>
              <a href="https://piano-key.netlify.app">Piano</a>
            </button>
          </h6>
          <h6>
            <button id='headerbttn'>
              <a href="https://ecomwebapp-two.vercel.app/">Ecommerce Website</a>
            </button>
          </h6>
          </article>
        </div>
        <div className="footdiv3">
          <article className='footart'>
            <div className="navicon">
             <a href="https://www.facebook.com/harshada.karbele.77" target='_blank'> 
             <i class="fa-brands fa-facebook"></i>
             </a>
            </div>
            <div className="navicon">
             <a href="https://wa.me/99049004554" target='_blank'> 
             <i class="fa-brands fa-whatsapp"></i>
             </a>
            </div>
            <div className="navicon">
             <a href="https://www.instagram.com/harshada.888/" target='_blank'> 
             <i class="fa-brands fa-instagram"></i>
             </a>
            </div>
          </article>
          <br />
          <center>
            <p>copyright@HarshadaKarbele</p>
          </center>
        </div>
      </section>
    </div>
  )
}

export default Footer 



