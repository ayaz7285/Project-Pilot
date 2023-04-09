import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WeekTasks from "./WeekTasks";
import MonthTasks from "./MonthTasks";
import { useState, useEffect } from "react";
import LaterTasks from "./LaterTasks";
import CompletedTasks from "./CompletedTasks";
import MissedTasks from "./MissedTasks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tasks() {
  const [value, setValue] = React.useState(0);

  const [weekTasksData, setWeekTasksData] = useState([]);
  const [monthTasksData, setMonthTasksData] = useState([]);
  const [laterTasksData, setLaterTasksData] = useState([]);
  const [completedTasksData, setCompletedTasksData] = useState([]);
  const [missedTasksData, setMissedTasksData] = useState([]);

  // useEffect(() => {
  //   fetch("data/weekTasks.json")
  //     .then((response) => response.json())
  //     .then((data) => setWeekTasksData(data.weekTasks))
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    fetch("data/Tasks.json")
      .then((response) => response.json())
      .then((data) => {
        setWeekTasksData(data.weekTasks);
        setMonthTasksData(data.monthTasks);
        setLaterTasksData(data.laterTasks);
        setCompletedTasksData(data.completedTasks);
        setMissedTasksData(data.missedTasks);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="This Week" {...a11yProps(0)} />
          <Tab label="This Month" {...a11yProps(1)} />
          <Tab label="Later" {...a11yProps(2)} />
          <Tab label="Completed" {...a11yProps(3)} />
          <Tab label="Missed" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {weekTasksData.map((item) => (
              <WeekTasks
                task={item.task}
                project={item.project}
                info={item.info}
                severity={item.severity}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {monthTasksData.map((item) => (
              <MonthTasks
                task={item.task}
                project={item.project}
                info={item.info}
                severity={item.severity}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {laterTasksData.map((item) => (
            <LaterTasks
              task={item.task}
              project={item.project}
              info={item.info}
              severity={item.severity}
              date={item.date}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {completedTasksData.map((item) => (
            <CompletedTasks
              task={item.task}
              project={item.project}
              info={item.info}
              severity={item.severity}
              date={item.date}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {missedTasksData.map((item) => (
            <MissedTasks
              task={item.task}
              project={item.project}
              info={item.info}
              severity={item.severity}
              date={item.date}
            />
          ))}
        </div>
      </TabPanel>
    </Box>
  );
}
