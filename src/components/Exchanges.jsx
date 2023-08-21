import { React, useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader.jsx";
import { server } from "../index.js";
import ErrorComponent from "./ErrorComponent.jsx";
import { Link } from "react-router-dom";
import {
  Container,
  VStack,
  HStack,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";

const Exchanges = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exchange, setExchange] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const { data } = await axios(`${server}/exchanges`);
        setExchange(data);
        setLoading(false);
        // console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchange.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, url, rank }) => {
  return (
    <Link to={url}>
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
          p={"4"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>

        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </Link>
  );
};

export default Exchanges;
