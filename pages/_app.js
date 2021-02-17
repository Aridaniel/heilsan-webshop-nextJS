import '../styles/globals.css'
import Link from 'next/link'
import { Button, Container, Grid , Item, Menu, Segment , Visibility } from 'semantic-ui-react'
/* import 'semantic-ui-css/semantic.min.css' */
import {useState, useEffect} from 'react'
import Router from 'next/router'


const Navbar = () => {
  const [fixed,  setFixed] = useState(false);
/*   const [onPage, setOnPage] = useState(activePage === '/');
 */

/* const onPageFlip= ({name})=>{
  
  setOnPage(activePage === name)
}
 */
  return (
    <>
  <Visibility
  once= {false}
   /* onButtonPassed= {()=> setFixed(true)}
   onButtonPassedReversed = {()=>setFixed(false)} */
  >
    <Segment
    inverted
    textAlign= 'center'
    style={{minHeight: 50, padding: '1em 2em'}}
    >
      <Menu
      fixed={fixed ? "top" :null}
      inverted = {!fixed }
      pointing = {!fixed}
      secondary={!fixed}
      size={'large'}
      >
        <Container>
          <Link href="/" >
            <Menu.Item name='/' active/* ={activePage === '/'} */  >Products</Menu.Item> 
          </Link>
          <Link href="/About">
            <Menu.Item name='/About' /* active={activePage === '/About'} */>About</Menu.Item> 
          </Link> 
          <Link href="/Search">
            <Menu.Item name='/Search' >Search</Menu.Item> 
          </Link> 
          <Link href="/Contactus">
            <Menu.Item>Contact us</Menu.Item> 
          </Link> 
         
            <Menu.Item   position='right'>
              <Button   
              onClick={()=>{
                const storage = window.localStorage
                const cart = JSON.parse(storage.getItem('cart'))
                Router.replace(cart.webUrl)
              }}>Checkout</Button>
            </Menu.Item>
         
        </Container>
      </Menu>
    </Segment>
  </Visibility>
</>
  );
}

function MyApp({ Component, pageProps }) {
  return ( 
    <>
    <Navbar/>
    <br/>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
