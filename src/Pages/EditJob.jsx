import React, { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles'; 
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';   //8.navigation insted of link tag

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["On-site", "Hybrid", "Remote"];
const namess = ["Bangalore", "Mumbai", "Mangalore", "Pune", "Udupi"];
const namesss = ["Entry-Level", "Mid-Level", "Senior-Level", "Executive"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function EditJob() {


    let {id} = useParams()    //
    console.log(id)


  const [jobtitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [workplaceType, setWorkplaceType] = useState("");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  useEffect(()=>{            //
    let data = JSON.parse(localStorage.getItem("JobList"))
    let filtered_data = data.filter((item)=>{
        return item.JobList_id==id
    })
    // console.log(filtered_data,1111)  
    setJobTitle(filtered_data[0]?.jobtitle)   
    setCompany(filtered_data[0].company)
    setWorkplaceType(filtered_data[0].workplaceType)
    setLocation(filtered_data[0].location)
    setExperienceLevel(filtered_data[0].experienceLevel)
    setJobDescription(filtered_data[0].jobDescription)
},[]) 

  const nav=useNavigate()  //8.

  const theme = useTheme();

  const handleWorkplaceTypeChange = (event) => {
    setWorkplaceType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleExperienceLevelChange = (event) => {
    setExperienceLevel(event.target.value);
  };


  // 2.getting initial value
  let initialvalue;
  if(localStorage.getItem("JobList")==null){
    initialvalue=[]
  }else{
    initialvalue=JSON.parse(localStorage.getItem("JobList"))
  }
 // JSON.parse is used to remove the string value that is stored in localstroge of getitem


  const [JobList,setJobList]=useState(initialvalue)
  console.log(JobList)

  const handleSubmit = async(e) => {     
    e.preventDefault();

    
    let data = JSON.parse(localStorage.getItem("JobList"))     //
    const index = (data.findIndex((e) => e.JobList_id == id))   //
    let edit_data = {JobList_id:id, jobtitle, company, workplaceType, location, experienceLevel, jobDescription}

    data.splice(index,1,edit_data)  //

    await localStorage.setItem("JobList", JSON.stringify(data)) //6.

    alert("Job List Added Successfully") //8.

    nav("/viewjob") //8.
  };

  useEffect(()=>{
    localStorage.setItem("JobList", JSON.stringify(JobList)) //7.
  },[JobList])

  return (
    <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/1331579485/vector/background-curved-light-blue.jpg?s=612x612&w=0&k=20&c=Wslr-PIxcQDoxXmzC7_w8rbFM9_s_5Jz99tE3ftNM1A=')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <h4 style={{ textAlign: "center", fontSize: "25px", marginTop: "10px", marginBottom: "10px" }}>Post a Job</h4>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: 400,
            maxWidth: '100%',
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          <TextField fullWidth label="Job Title" onChange={(e) => setJobTitle(e.target.value)} value={jobtitle} />
          <TextField fullWidth label="Company" onChange={(e) => setCompany(e.target.value)} value={company} />
          <FormControl sx={{ m: 0, width: 400 }}>
            <InputLabel id="workplace-type-label">Workplace type</InputLabel>
            <Select
              labelId="workplace-type-label"
              id="workplace-type"
              value={workplaceType}
              onChange={handleWorkplaceTypeChange}
              input={<OutlinedInput label="Workplace Type" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, workplaceType, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 0, width: 400 }}>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location"
              value={location}
              onChange={handleLocationChange}
              input={<OutlinedInput label="Location" />}
              MenuProps={MenuProps}
            >
              {namess.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, location, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 0, width: 400 }}>
            <InputLabel id="experience-level-label">Experience Level</InputLabel>
            <Select
              labelId="experience-level-label"
              id="experience-level"
              value={experienceLevel}
              onChange={handleExperienceLevelChange}
              input={<OutlinedInput label="Experience Level" />}
              MenuProps={MenuProps}
            >
              {namesss.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, experienceLevel, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="job-description"
            label="Job Description"
            multiline
            rows={3}
            onChange={(e) => setJobDescription(e.target.value)}
            value={jobDescription}
          />
          <Button variant="outlined" color="error" type="submit">
            Add
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default EditJob;
