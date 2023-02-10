import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { InventorySuper } from "../../components/admin/InventorySuper";
import { SidebarSuper } from "../../components/admin/SidebarSuper";

export const InventorySuperPage = () => {
  return (
    <div>
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
        <GridItem>
          <InventorySuper />
        </GridItem>
      </Grid>
    </div>
  );
};
