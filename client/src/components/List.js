import React, { useEffect, useState } from "react";
import url from "../env";
import { Link } from "react-router-dom";

import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Image,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

function List() {
  var [val, setVal] = useState();

  useEffect(() => {
    fetch("http://localhost:8090/student/show")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setVal(json.data);
      });
  }, []);

  const deleteData = (ev, id) => {
    ev.preventDefault();

    fetch("http://localhost:8090/student/delete/" + id, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        ev.target.parentNode.parentNode.remove();
      });
  };

  return (
    <ChakraProvider>
      <Flex backgroundColor="teal.500" p={4} borderRadius="15px 15px 0 0">
        <Heading as="h3" size="lg" m={4} color="white">
          Student Details
        </Heading>
      </Flex>
      <Flex wrap="wrap" backgroundColor="teal.500" p={4}>
        {val &&
          val.map(
            ({ _id, file, username, birthdate, location, gender, hobby }) => (
              <motion.div
                key={_id}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
              >
              <Box
                p={6}
                m="15px"
                borderRadius="md"
                boxShadow="0 10px 10px rgba(0, 51, 51, 1)"
                width="200px"
                maxW="200px"
                justifyContent="center"
                textAlign="center"
                backgroundColor="white"
              >
                <Image
                  src={url.nodeapipath + "/assets/uploads/" + file}
                  alt="Profile Pic"
                  objectFit="cover"
                  width="170px"
                  height="170px"
                  borderRadius="md"
                />
                <Text fontWeight="bold">{username}</Text>
                <Text>{birthdate}</Text>
                <Text>{location}</Text>
                <Text>{gender}</Text>
                <Text>{hobby}</Text>
                <Link to={`/edit/${_id}`}>
                  <IconButton
                    colorScheme="teal"
                    aria-label="Edit"
                    icon={<EditIcon />}
                  />
                </Link>
                <IconButton
                  m={2}
                  colorScheme="red"
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  onClick={(ev) => {deleteData(ev,_id)}}
                />
              </Box>
            </motion.div>

            )
          )}
      </Flex>
    </ChakraProvider>
  );
}

export default List;
