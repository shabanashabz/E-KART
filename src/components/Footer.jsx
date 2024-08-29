import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
        <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{color:'white'}}>
            <div style={{width:'400px',color:'white'}}>
                <h4 ><i class="fa-solid fa-cart-shopping me-3 text-light"></i>E-KART</h4>
                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam molestias repellat maiores a eius, repudiandae illo corporis maxime laudantium, vero temporibus. Qui cumque veniam adipisci natus accusantium est asperiores ut!</h6>
            </div>
            <div className='d-flex flex-column'>
                <h4>Links</h4>
                <Link to={'/'} style={{color:'white',textDecoration:'none'}}>Home</Link>
                <Link to={'/cart'} style={{color:'white',textDecoration:'none'}}>Cart</Link>
                <Link to={'/wishlist'} style={{color:'white',textDecoration:'none'}}>Wishlist</Link>
            </div>
            <div className='d-flex flex-column '>
                <h4>Guides</h4>
                <Link to={'https://react.dev'} target='_blank' style={{color:'white',textDecoration:'none'}}>React</Link>
                <Link to={'https://react.dev'} target='_blank'  style={{color:'white',textDecoration:'none'}}>React Bootstrp</Link>
                <Link to={'https://react.dev'} target='_blank' style={{color:'white',textDecoration:'none'}}>Boots watch</Link>
            </div>
            <div>
                <h4>Contact</h4>
                <div className='d-flex'>
                    <input type="text" className='form-control rounded' placeholder='Enter email id' />
                    <button className='btn btn-warning ms-2 rounded'>Subscribe</button>
                </div>
                <div className='d-flex justify-content-evenly mt-3'>
                    <Link className='text-warning' style={{textDecoration:'none'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                    <Link className='text-warning' style={{textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                    <Link className='text-warning' style={{textDecoration:'none'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
                    <Link className='text-warning' style={{textDecoration:'none'}}><i class="fa-brands fa-reddit fa-2x"></i></Link>
                </div>
            </div>
        </div>
        <p style={{color:'white'}}>Copyright &#169; 2024 E-Kart build with react redux</p>
    </div>
    
    </>
  )
}

export default Footer