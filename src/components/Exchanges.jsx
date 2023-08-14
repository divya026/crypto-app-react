// import { React, useState, useEffect } from "react";
// import axios from "axios";
// import { server } from "../index.js";
// import Spinner from "./Spinner.jsx";
// import { HStack, Image, Text, VStack, Container } from "@chakra-ui/react";
// import { wrap } from "framer-motion";

// const Exchanges = () => {
//   const [excahnge, setExchange] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchAPI = async () => {
//       try {
//         const { data } = await axios(`${server}/exchanges`);
//         setExchange(data);
//         console.log(data);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };
//     fetchAPI();
//   }, []);

//   if (error) {
//     console.log("its a error");
//   }
//   return (
//     <Container maxW={"container.xl"}>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <HStack wrap={wrap} justifyContent={"space-evenly"}>
//           {excahnge.map((i) => (
//             <ExchangeCrad
//               key={i.id}
//               name={i.name}
//               img={i.image}
//               rank={i.trust_score_rank}
//               url={i.url}
//             />
//           ))}
//         </HStack>
//       )}
//     </Container>
//   );
// };

// const ExchangeCrad = ({ name, img, rank, url }) => {
//   return (
//     <a href={url}>
//       <VStack
//         w={"52"}
//         shadow={"lg"}
//         p={"8"}
//         borderRadius={"lg"}
//         transition={"all 0.3s"}
//         m={"4"}
//         css={{
//           "&:hover": {
//             transform: "scale(1.1)",
//           },
//         }}
//       >
//         <Text>{name}</Text>
//         <Image src={img}></Image>
//         <Text>{rank}</Text>
//       </VStack>
//     </a>
//   );
// };

// export default Exchanges;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import ErrorComponent from "./ErrorComponent.jsx";
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader.jsx";
// import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </>
        )}
      </HStack>
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        animate={{}}
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
