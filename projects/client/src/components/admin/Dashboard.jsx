import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDoneOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

export const DashboardComp = () => {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [data6, setData6] = useState();
  const { id } = useSelector((state) => state.adminSlice.value);

  const getData = async () => {
    try {
      const result = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/transaction/listWaitingPayment/${id}`
      );
      setData(result.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const getData2 = async () => {
    try {
      const result = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/transaction/listConfirmPayment/${id}`
      );
      setData2(result.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    getData2();
  }, [id]);

  const getData3 = async () => {
    try {
      const result = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/transaction/listOnProcess/${id}`
      );
      setData3(result.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    getData3();
  }, [id]);

  const getData4 = async () => {
    try {
      const result = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/transaction/listDelivery/${id}`
      );
      setData4(result.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    getData4();
  }, [id]);

  const getData5 = async () => {
    try {
      const result = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/transaction/listDone/${id}`
      );
      setData5(result.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    getData5();
  }, [id]);

  const getData6 = async () => {
    try {
      const result = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/transaction/listCancelled/${id}`
      );
      setData6(result.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    getData6();
  }, [id]);
  return (
    <div>
      <Box maxW="6xl" pl="70px" mt="50px" mx={"auto"}>
        <SimpleGrid columns={{ base: 1, md: 6 }} spacing={{ base: 6, lg: 2 }}>
          <StatsCard
            title={"Waiting Payment"}
            stat={data?.length}
            icon={<MdOutlinePayment size={"2.5em"} />}
          />
           <StatsCard
            title={"Cancel Order"}
            stat={data6?.length}
            icon={<MdOutlinePayments size={"2.5em"} />}
          />
          <StatsCard
            title={"Confirm Payment"}
            stat={data2?.length}
            icon={<MdOutlinePayments size={"2.5em"} />}
          />
          <StatsCard
            title={"On Process"}
            stat={data3?.length}
            icon={<GoPackage size={"2.5em"} />}
          />
          <StatsCard
            title={"Delivery"}
            stat={data4?.length}
            icon={<TbTruckDelivery size={"2.5em"} />}
          />
          <StatsCard
            title={"Done"}
            stat={data5?.length}
            icon={<MdDoneOutline size={"2.5em"} />}
          />
        </SimpleGrid>
      </Box>
    </div>
  );
};

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <div>
      <Stat
        px={{ base: 2, md: 1 }}
        h="88px"
        shadow={"xl"}
        border={"2px"}
        borderColor={useColorModeValue("#285430")}
        bgColor="#E5D9B6"
        rounded={"lg"}
      >
        <Flex justifyContent={"space-around"}>
          <Box w={"110px"} ml="6px">
            <StatLabel fontWeight={"medium"} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={"auto"}
            color={useColorModeValue("#285430")}
            alignContent={"center"}
          >
            {icon}
          </Box>
        </Flex>
      </Stat>
    </div>
  );
}