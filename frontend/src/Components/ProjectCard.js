import * as React from 'react';
import Card from '@mui/material/Card';
import { Avatar, Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TeamCardMenu from './TeamCardMenu';


export default function ProjectCard(props) {
  return (
    <Card sx={{ minWidth: 390 ,minHeight: 190,margin:"10px",position:"relative",display:"flex"}} elevation={4}>
      <Avatar sx={{ bgcolor: `${props.color}` ,width:"100px",height:"100px",margin:"auto 20px"}} variant="rounded">
        <AssignmentIcon sx={{fontSize:"70px"}} />
      </Avatar>
      <div style={{width:"100%",border:"1px solid black"}}>
        <div style={{width:"100%",height:"80%",padding:"29px",fontSize:"20px"}}>
            Rakuten Ichiba
        </div>
        <Divider/>
        <div style={{display:"flex",color:"gray"}}>
            <div style={{width:"50%",padding:"10px"}}>
                Tasks : 5
            </div>
            <div style={{width:"50%",padding:"10px"}}>
                Team : 10
            </div>
        </div>
      </div>
    </Card>
  );
}