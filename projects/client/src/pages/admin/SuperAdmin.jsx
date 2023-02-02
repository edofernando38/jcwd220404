import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SidebarSuper } from "../../components/admin/SidebarSuper";

export const SuperComp = () => {
  const [data2, setData2] = useState([]);
  const { username } = useSelector((state) => state.adminSlice.value);

  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="100vh"
        gap="1"
        color="#285430"
        fontWeight="bold"
        bgColor={"white"}
      >
        <GridItem>
          <SidebarSuper />
        </GridItem>
      </Grid>
    </>
  );
};