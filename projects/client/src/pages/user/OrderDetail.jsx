import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import {
  Box,
  Card,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  CiBag1,
  CiCreditCard1,
  CiDeliveryTruck,
  CiInboxIn,
} from "react-icons/ci";
import { useSelector } from "react-redux";
import { CompleteOrder } from "../../components/user/CompleteOrder";
import { CancelOrder } from "../../components/user/CancelOrder";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const OrderDetail = () => {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [data6, setData6] = useState();
  const { id } = useSelector((state) => state.userSlice.value);
  const params = useParams();

  let dateNow = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ).toLocaleString("en-EN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let dateDeliv = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 2
  ).toLocaleString("en-EN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getData = async () => {
    try {
      const result = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/transaction/list/${params.id}`
      );
      setData(result.data);
      console.log(result.data);
      setData6(result.data.id);
      console.log(result.data.id);
      const selectedItem = result.data.totalOrder;
      const selectedCharge = result.data.totalCharge;

      let totalOrder = selectedItem + selectedCharge;
      setData2(totalOrder);
      console.log(totalOrder);

      const statusDone = result.data.status;
      setData5(statusDone);
      console.log(statusDone);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getCheckout = async () => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/transaction/listProduct/${data6}`
      );

      setData3(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCheckout();
  }, [data6]);

  const getDefault = async () => {
    try {
      const result = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/address/findDefault/${id}`
      );
      console.log(result.data.defaultAdd);
      setData4(result.data.defaultAdd);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDefault();
  }, [id]);

  return (
    <div>
      <Center>
        <Box>
          <Box
            className="header"
            w={"390px"}
            h={"80px"}
            bgColor="#E5D9B6"
            display="flex"
            justifyContent="space-between"
            pt={"10px"}
            pl={"1px"}
            position="fixed"
            zIndex="2"
          >
            <Box as={Link} to={`/transaction`}>
              <ArrowBackIcon
                mt={"20px"}
                ml={"20px"}
                pos={"fixed"}
                color="#285430"
                fontSize={"25px"}
              />
            </Box>
            <Box margin={"auto"} alignItems={"center"} textColor="#285430">
              <Text as={"b"} fontSize="xl">
                ORDER DETAIL
              </Text>
            </Box>
          </Box>
          <Box
            className="body"
            bgColor="white"
            h={"90vh"}
            w={"390px"}
            mt="80px"
          >
            <Stack>
              <Flex justify={"center"}>
                <HStack mt={"10px"}>
                  <CiCreditCard1 color="#285430"></CiCreditCard1>
                  <CiBag1 color="#285430" />
                  <CiDeliveryTruck color="#285430" />
                  <CiInboxIn color="#285430" />
                </HStack>
              </Flex>
              <Center>
                <Box
                  w={"370px"}
                  border={"1px"}
                  borderColor="#285430"
                  borderRadius={"md"}
                >
                  <Text pl={"10px"} color="#285430">
                    Please proceed Payment before
                  </Text>
                  <Text pl={"10px"} color="#285430">
                    {dateNow}
                  </Text>
                </Box>
              </Center>
              <Box>
                <FormControl>
                  <FormLabel mt={"1px"} pl={"10px"} color="#285430">
                    Order Information
                  </FormLabel>
                  <Center>
                    <Box
                      w={"370px"}
                      border={"1px"}
                      borderColor="#285430"
                      borderRadius={"md"}
                    >
                      <Flex justify={"space-between"}>
                        <Text pl={"10px"} color="#285430">
                          Order-ID
                        </Text>
                        <Text pr={"10px"} color="#285430">
                          {data?.id_order}{" "}
                        </Text>
                      </Flex>
                      <Flex justify={"space-between"}>
                        <Text pl={"10px"} color="#285430">
                          Transaction Date
                        </Text>
                        <Text pr={"10px"} color="#285430">
                          {dateNow}{" "}
                        </Text>
                      </Flex>
                      <Flex justify={"space-between"}>
                        <Text pl={"10px"} color="#285430">
                          Total
                        </Text>
                        <Text pr={"10px"} color="#285430">
                          {new Intl.NumberFormat("IND", {
                            style: "currency",
                            currency: "IDR",
                          }).format(data2)}{" "}
                        </Text>
                      </Flex>
                    </Box>
                  </Center>
                </FormControl>
                <FormControl>
                  <FormLabel mt="10px" ml={"10px"} textColor="#285430">
                    Order Detail
                  </FormLabel>
                  {data3?.map((item) => {
                    return (
                      <Card
                        margin={"10px"}
                        w="370px"
                        bgColor={"white"}
                        border={"1px"}
                        borderColor="#285430"
                        borderRadius={"md"}
                        mt={"5px"}
                      >
                        <Flex mb={"8px"} justify={"space-between"}>
                          <Grid
                            templateAreas={`"nav main""nav footer"`}
                            gridTemplateRows={" 1fr 30px"}
                            gridTemplateColumns={"120px 1fr"}
                            h="50px"
                            color="#285430"
                            fontWeight="bold"
                          >
                            <GridItem ml="20px" mt={"1px"} area={"nav"}>
                              <Image
                                boxSize={"55px"}
                                src={
                                  `${process.env.REACT_APP_API_BASE_URL}/` +
                                  item.Product.picture
                                }
                              ></Image>
                            </GridItem>
                            <GridItem
                              mt="10px"
                              fontSize={"small"}
                              pl="1"
                              area={"main"}
                            >
                              {item.Product?.productName}
                            </GridItem>
                            <GridItem fontSize={"small"} pl="1" area={"footer"}>
                              <Text>
                                {new Intl.NumberFormat("IND", {
                                  style: "currency",
                                  currency: "IDR",
                                }).format(item.totalCheckout)}
                              </Text>
                            </GridItem>
                          </Grid>
                          <Text fontSize={"small"} color={"#285430"} mr="30px" mt={"15px"}>
                            {item.totalWeight} g
                          </Text>
                          <Text fontSize={"small"} color={"#285430"} mr="30px" mt={"15px"}>
                            {item.qty}x
                          </Text>
                        </Flex>
                      </Card>
                    );
                  })}
                </FormControl>
                <FormControl pl="10px" color={"#285430"}>
                  <FormLabel pt={"1px"}>Delivery Address</FormLabel>
                  <Box
                    border={"1px"}
                    borderColor="#285430"
                    borderRadius={"md"}
                    w="370px"
                    pl={"10px"}
                  >
                    <Text as={"b"}>{data2?.receiverName}</Text>
                    <Text>{data4?.receiverPhone}</Text>
                    <Text>{data4?.addressLine}</Text>
                    <Text>
                      {data4?.district} {data4?.city}, {data4?.province}
                    </Text>
                  </Box>
                </FormControl>
                <FormControl pl="10px" color={"#285430"}>
                  <FormLabel pt={"10px"}>Delivery Date</FormLabel>
                  <Text align={"left"}> {dateDeliv}</Text>
                </FormControl>
              </Box>

              <Box>{data5 === "Waiting Payment" ? <CancelButton /> : ""}</Box>
              <Box>{data5 === "On Delivery" ? <CompleteButton /> : ""}</Box>
              <Box>{data5 === "Done" || "Order Cancelled" ? "" : ""}</Box>
            </Stack>
          </Box>
        </Box>
      </Center>
    </div>
  );
};
