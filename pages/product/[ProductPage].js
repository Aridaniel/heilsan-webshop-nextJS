import { useRouter } from 'next/router'
import {client} from '../../utils/shopify'
import {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'

import { Button, Container, Grid ,Card, Input, Image, Item, List, Menu, Header, Segment , Visibility, Divider } from 'semantic-ui-react'

const {Row, Column} = Grid;

const Post = ({product}) => {
    const [image, setImage]= useState(product.images[0])
    const [quantity, setQuantity] = useState(0);
    
    // Adding the product to a cart 
    const addToCart =  async ()=>{
        const storage = window.localStorage;
        let checkoutId= storage.getItem('checkoutId')
        console.log({checkoutId})
        if(!checkoutId){
            const checkout = await client.checkout.create();
            checkoutId = checkout.id
            storage.setItem('checkoutId', checkoutId)
        }
        console.log('Takki virkar...?')

        const cart = await client.checkout.addLineItems(checkoutId, [{
            variantId: product.variants[0].id,
            quantity
        }])
        storage.setItem('cart', JSON.stringify(cart))
        console.log('The cart is= ', {cart})
    }
    //Displaying each product
    
  return ( <Grid  centered  >
            
             {/* <Row  > */}
                    <Column width={7} centered verticalAlign='middle'
>
                        <Row style={{marginTop: 45}}>
                            <Image centered size={'medium'} src={image.src}/>
                        </Row>
                        <Row style={{margin: 15}}>
                            <List   >
                                {product.images.map((image, index) =>{
                                    return (
                                        <List.Item centered onClick={()=>setImage(image)}>
                                            <Image size={'tiny'} avatar src={image.src} />      
                                            <Image size={'tiny'} avatar src={image.src} />        
                                            <Image size={'tiny'} avatar src={image.src} />        
                                                
                                               
                                        </List.Item>
                                    );
                                })}    
                            </List>
                        </Row>
                    </Column>
                    <Column  style={{marginTop: 150}} >
                        <Input  action={{onClick:addToCart,size:'tiny', color: 'teal',labelPosition: 'left',icon: 'cart',content: 'Checkout'}}
                                type='number'
                                actionPosition='left'
                                placeholder='count'
                                defaultValue='1'
                                onChange={(e,{value})=> setQuantity(Number(value))}
                                size='mini'
                                className='inputProductCount'
                                />                
                    </Column>
                    

                {/* </Row> */}
                <Container /* style={{marginBottom: 30}} */ fluid>
                    <Header as='h2'>{product.title}</Header>  
                    <p className='price'>PRICE</p>

                    <p>{product.description}</p>
                    
                </Container>
                
            </Grid>
            
        )
}

export async function getServerSideProps({params}) {
    console.log(params)
    const productIdName = params.ProductPage
    const product = await client.product.fetch(productIdName);
  
    console.log('JAAAAAaaaaa')
    // Pass data to the page via props
    return { props: { product: JSON.parse(JSON.stringify(product)) } };
  }

export default Post