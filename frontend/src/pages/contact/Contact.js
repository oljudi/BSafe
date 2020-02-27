import React from 'react'
import { Stack, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/core'

function Contact() {
    return (
        <Stack>
            <Heading as='h4'>Add safe contacts</Heading>
            <FormControl>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input type='text' id='name' />
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input type='email' id='email'/>
                <FormLabel htmlFor='phone'>Phone</FormLabel>
                <Input type='text' id='phone'/>
                <Button 
                    mt={4}
                    variantColor='red'
                    type='submit'    
                >
                    Add
                </Button>
            </FormControl>
        </Stack>
    )
}

export default Contact
