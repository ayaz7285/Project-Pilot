import * as React from 'react';
import Card from '@mui/material/Card';
import { Avatar } from '@mui/material';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import TeamCardMenu from './TeamCardMenu';

export default function TeamCard(props) {
  return (
    <Card sx={{ minWidth: 206 ,minHeight: 206,margin:"20px",position:"relative"}} elevation={4}>
      <TeamCardMenu/>
        
      <Avatar sx={{ bgcolor: `${props.color}` ,width:"100px",height:"100px",margin:"30px auto"}} variant="rounded">
        <GroupsSharpIcon sx={{fontSize:"70px"}} />
      </Avatar>
      <div style={{width:"100%",textAlign:"center",paddingBottom:"15px",fontWeight:"bold"}}>Hr Team</div>
    </Card>
  );
}