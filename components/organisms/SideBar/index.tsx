import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { Button } from "../../atomic";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentIcon from "@mui/icons-material/Assignment";

interface ListItem {
  key: string;
  label: string;
  icon: any;
  url: string;
}

const lists: ListItem[] = [
  {
    key: "home",
    label: "Home",
    icon: <HomeIcon />,
    url: "/",
  },
  {
    key: "calculator",
    label: "Calculator",
    icon: <AttachMoneyIcon />,
    url: "/calculator",
  },
  {
    key: "document",
    label: "How to play",
    icon: <AssignmentIcon />,
    url: "/howto",
  },
  {
    key: "port",
    label: "Port",
    icon: <AccountBalanceWalletIcon />,
    url: "/me",
  },
];

const CustomFrawer = styled(Drawer)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiDrawer-paper": {
    backgroundColor: "#1a2034",
  },
}));

function SideBar() {
  const [selected, setSelected] = useState("home");

  return (
    <CustomFrawer anchor="left" variant="permanent">
      <Box width="275px" overflow="hidden" mt="50px" mb="25px">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="10px"
        >
          <Box borderRadius="50%" overflow="hidden">
            <Image
              src="/wax.jpeg"
              alt="wax"
              width={110}
              height={110}
              objectFit="cover"
            />
          </Box>
          <Box sx={{ minWidth: "100%", textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{ minWidth: "90%", color: "white" }}
            >
              LOGIN
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <Divider /> */}
      <Box
        bgcolor="rgba(39, 55, 85, 0.75)"
        m="15px"
        borderRadius="15px"
        p="5px"
        sx={{ backdropFilter: "blur(16px) saturate(180%)" }}
      >
        <List>
          {lists.map((item: ListItem) => (
            <Link key={item.url} href={item.url} passHref={true}>
              <ListItem
                button
                sx={{
                  paddingLeft: "30px",
                  margin: "20px 0px 20px 0px",
                  color: "#ffffff",
                  borderRadius: "15px",
                  backgroundColor: () => {
                    return selected === item.key ? "#14192e" : "";
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  {item.icon}{" "}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="end"
        flexGrow="1"
        mb="30px"
      >
        <Divider />
        <br></br>
        <Box display="flex" justifyContent="space-around">
          <Box>LOGO 1</Box>
          <Box>LOGO 2</Box>
          <Box>LOGO 3</Box>
        </Box>
      </Box>
    </CustomFrawer>
  );
}

export default SideBar;
