import React, { useRef, useState } from "react";

import {
  ChakraProvider,
  Radio,
  RadioGroup,
  Stack,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Select,
} from "@chakra-ui/react";
import dataProcess from "../functions/dataProcess";
import useFetch from "../hooks/useFetch";

function MyForm() {
  var x1 = useRef();
  var x2 = useRef();
  var x3 = useRef();
  var x4 = useRef();

  var [status, setStatus] = useState(false);
  var [fileData, setFiledata] = useState({});

  var [gender, setGender] = useState("");
  console.log(gender);

  var ans = useFetch('/location/show-location')
  console.log(ans);

  function myfunc(e) {
    e.preventDefault();
    if (status) {
      var formRecord = new FormData();
      formRecord.append("username", x1.current.value);
      formRecord.append("birthdate", x2.current.value);
      formRecord.append("location", x3.current.value);
      formRecord.append("gender", gender);
      formRecord.append("hobby", x4.current.value);
      formRecord.append("userfilepath", fileData);
      console.log(formRecord);

      dataProcess("/student/register", {
        method: "post",
        body: formRecord,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please select file to upload");
    }
  }

  function fileStatus(record) {
    console.log(record);
    console.log(record.files[0]);
    setFiledata(record.files[0]);
    setStatus(true);
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
          Register
        </Heading>

        <form onSubmit={myfunc}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              name="username"
              ref={x1}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="birthdate">Birthdate</FormLabel>
            <Input
              type="date"
              name="birthdate"
              ref={x2}
            />
          </FormControl>

          <FormControl mt={4}>
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
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Select
              name="location"
              placeholder="Select a location"
              ref={x3}
            >
              {
                ans.data && ans.data.map(val=>
                <option value={val.locationname}>
                  {val.locationname}
                </option>)
              }
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="hobby">Hobbies</FormLabel>
            <Input
              type="text"
              name="hobby"
              ref={x4}
              placeholder="Enter your Hobby"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="file">Upload Profile Picture</FormLabel>
            <Input
              type="file"
              name="userfilepath"
              onChange={(e) => {
                fileStatus(e.target);
              }}
            />
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
}

export default MyForm;
