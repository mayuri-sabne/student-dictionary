import { ChakraProvider, SimpleGrid, Box, Center } from '@chakra-ui/react'

function About() {
    return (
        <ChakraProvider>
            <Center height="100vh">
                <SimpleGrid columns={2} spacing={8} >
                    <Box bg='tomato' height='400px' width='400px'>box1</Box>
                    <Box bg='tomato' height='400px' width='400px'>box2</Box>
                </SimpleGrid>
            </Center>
        </ChakraProvider>
    )
}
export default About;