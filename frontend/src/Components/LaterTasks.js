import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function LaterTasks(props) {
 
  
  
  return (
    <Card sx={{ width: "31%", maxWidth: 400, margin: "10px" }}>
      <CardContent sx={{ minHeight: "230px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.task}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.project}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.info}
        </Typography>
      </CardContent>
      <Divider sx={{ width: "90%", margin: "auto" }} />
      <CardActions sx={{ position: "relative" }}>
        <div style={{ width: "10px", margin: "5px 10px" }}>
          <Checkbox
            label="CheckCircleOutlineIcon"
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleOutlineIcon />}
          />
        </div>
        <div style={{ width: "10px", paddingLeft: "15px" ,paddingTop:"6px"}}>
          <DeleteOutlineIcon />
        </div>
        <div style={{display:"flex", position: "absolute", right: "0", marginRight: "15px" }}>
          <span className={props.severity+"-dot"}></span>
          {props.date}
        </div>
      </CardActions>
    </Card>
  );
}
