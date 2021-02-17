//Import Client from shopify-buy depency
import Client from 'shopify-buy'



//Here is where i connect to the Shopify CMS system, in my shopify aacount I add the products
const client = Client.buildClient({
    domain: 'heilsuvaran.myshopify.com',
    storefrontAccessToken: '3d8f7a00bf2a3ae72028a338c61d80e5'
});

export {client}