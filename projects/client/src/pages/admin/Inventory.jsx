import { Grid, GridItem } from "@chakra-ui/react";
import { SidebarBranch } from "../../components/admin/SidebarBranch";
import { InventoryAdminComp } from "../../components/admin/AddInventory";

export const InventoryAdminPage = () => {
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
          <SidebarBranch />
        </GridItem>
        <GridItem>
          <InventoryAdminComp />
        </GridItem>
      </Grid>
    </div>
  );
};
