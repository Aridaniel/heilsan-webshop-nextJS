import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import { Button, Form, Checkbox, TextArea, Container, Grid ,Card, Input, Image, Item, List, Menu, Header, Segment , Visibility, Divider } from 'semantic-ui-react'


function Search() {

   
    return (
        
       <>
       <Grid centered>
        <Form  width='large' >
         <Form.Field > 
                <label>First Name</label>
                <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>
                   
            <Form.Field>
                <TextArea placeholder='Tell us more' />
            </Form.Field>
               

            <Form.Field>
                 <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
        <Button  type='submit'>Submit</Button>
    </Form>
    </Grid>
        
        
        </>
    )
}

export default Search