import * as React from "react";

import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Sheet from "@mui/joy/Sheet";

export default function ColorInversionFooter() {
  const [color] = React.useState("neutral");
  return (


    
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== "neutral" && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{
            flexGrow: 0,
            "--ListItem-radius": "8px",
            "--ListItem-gap": "0px",
          }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>LEGAL</ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>LANGUAGE</ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}></List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
