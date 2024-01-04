import React, { useEffect,useRef, useState } from "react";

import { useNavigate, useParams } from 'react-router-dom';

import {
  ChakraProvider,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";

function Edit() {
  var x1 = useRef();
  var x2 = useRef();
  var x3 = useRef();
  var x4 = useRef();

  let navigate = useNavigate();

    let params = useParams();
    console.log(params); //{userid:234234jh2g34hjg23h4gj}


    const[val,setVal] = useState({})

    useEffect(()=>{
        fetch('http://localhost:8090/student/show/'+params.userid)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setVal(json.data)
            })
    },[params.userid])

  function myfunc(e) {
    e.preventDefault();
      var record = {
      username: x1.current.value,
      birthdate:x2.current.value,
      place:x3.current.value,
      hobby: x4.current.value
      }
      var ans = JSON.stringify(record);
      // console.log(ans);

      fetch('http://localhost:8090/student/edit/'+params.userid , {
          method:"put",
          body:ans,
          headers:{
              "Content-Type":"application/JSON"
          }
      })
          .then(res => res.json())
          .then(json => {
              console.log(json);
              navigate("/")
              
          })
  }

  return (
    <ChakraProvider>
      <Box
        p={4}
        mx="15%"
        my="5%"
        border="1px solid teal"
        borderRadius="md"
        boxShadow="lg"
        backdropFilter="blur(8px)"
        backgroundColor="rgba(255, 255, 255)"
      >
        <Heading as="h2" size="lg" mb={4}>
          Update Profile
        </Heading>

        <form action="#" onSubmit={myfunc}>
          <FormControl asChild>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              name="username"
              ref={x1}
              placeholder="Enter your name"
              required defaultValue={val.username}
            />
          </FormControl>

          <FormControl mt={4} asChild>
            <FormLabel htmlFor="birthdate">Birthdate</FormLabel>
            <Input
              type="date"
              name="birthdate"
              ref={x2}
              required  defaultValue={val.birthdate}
            />
          </FormControl>

          {/* <FormControl mt={4}>
            <FormLabel htmlFor="genderForm">Gender</FormLabel>
            <RadioGroup id="genderForm">
              <Stack direction="row">
                <Radio
                  value="male"
                  name="gender"
                  onChange={(e) => setGender("Male")}
                >
                  Male
                </Radio>
                <Radio
                  value="female"
                  name="gender"
                  onChange={(e) => setGender("Female")}
                >
                  Female
                </Radio>
                <Radio
                  value="other"
                  name="gender"
                  onChange={(e) => setGender("Other")}
                >
                  Other
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl> */}

          <FormControl mt={4} asChild>
            <FormLabel htmlFor="place">Place</FormLabel>
            <Input
              type="text"
              name="place"
              ref={x3}
              placeholder="Enter your place"
              required  defaultValue={val.place}
            />
          </FormControl>

          <FormControl mt={4} asChild>
            <FormLabel htmlFor="hobby">Hobbies</FormLabel>
            <Input
              type="text"
              name="hobby"
              ref={x4}
              placeholder="Enter your Hobby"
              required  defaultValue={val.hobby}
            />
          </FormControl>

          {/* <FormControl mt={4}>
            <FormLabel htmlFor="file">Upload Profile Picture</FormLabel>
            <Input
              type="file"
              name="filename"
              onChange={(e) => {
                fileStatus(e.target);
              }}
            />
          </FormControl> */}

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
}

export default Edit;
