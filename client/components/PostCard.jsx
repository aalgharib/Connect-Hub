// import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarImage from "../assets/avatar_sample.jpg";
import CardHeader from "@mui/material/CardHeader";

// user proper props for the card
const PostCard = (props) => {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: 3,
        margin: 1,
        borderTop: 2,
        borderBottom: 2,
        borderLeft: 10,
        borderRight: 10,
        borderRadius: 0,
      }}
    >
      <CardHeader
        avatar={<Avatar src={AvatarImage} />}
        title={
          <Typography sx={{ fontSize: "0.8rem" }}>{props.content}</Typography>
        }
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "black", fontSize: "1rem" },
        }}
        sx={{
          alignItems: "center",
          padding: 2,
          "& .MuiCardHeader-content": {
            overflow: "visible",
            whiteSpace: "normal",
            textAlign: "left",
          },
        }}
      />
    </Card>
  );
};

export default PostCard;
