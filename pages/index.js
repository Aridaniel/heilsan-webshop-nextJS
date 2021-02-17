import Head from 'next/head'
import { Button, Card, Header, Image, Visibility, Menu  } from 'semantic-ui-react'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import {client} from '../utils/shopify'
import Link from 'next/link'

export default function Home({products}) {
  console.log(products)
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card.Group style={{margin:90}} centered  itemsPerRow={4}>
        {products.map(product=>{
         return (
         <Link key={product.id} href={`/product/${product.id}`}>
           <Card className='card'>
               <Image  size='small' src={product.images[0].src}/>
                <Card.Content >
                  <Card.Header as="h3">{product.title}</Card.Header>
                    <Card.Meta><span>Price</span></Card.Meta>
                    <Card.Description>
                    <p>{product.description}</p>
                   </Card.Description>
                  
               </Card.Content>
              
            </Card>
          </Link>
        );
      })}
      </Card.Group>


      <Button basic color='green'>
      Green
    </Button>
  </div>
  </>
  )
}

export async function getServerSideProps() {
  // Fetch data from Shopify
  const products = await client.product.fetchAll();

  console.log({products});
  // Pass data to the page via props
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
