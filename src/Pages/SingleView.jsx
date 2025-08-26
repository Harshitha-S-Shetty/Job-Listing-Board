import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MediaCard() {
  const { id } = useParams();
  console.log(id);

  const [singleJob, setSingleJob] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("JobList"));
    const single = data.find((item) => item.JobList_id === id);
    console.log(single);
    setSingleJob(single || {});
  }, [id]);

  return (
    <div 
      style={{
        display: "flex", 
        flexDirection: "column", 
        justifyContent: 'center', 
        alignItems: "center", 
        minHeight: "100vh", 
        backgroundImage: "url('https://media.istockphoto.com/id/1331579485/vector/background-curved-light-blue.jpg?s=612x612&w=0&k=20&c=Wslr-PIxcQDoxXmzC7_w8rbFM9_s_5Jz99tE3ftNM1A=')",  
        backgroundSize: "cover",
        padding: "20px"
      }}
    >
      <Card 
        sx={{ 
          minWidth: 300, 
          maxWidth: 600, 
          backgroundImage: 'url(https://media.istockphoto.com/id/1077910888/vector/vector-illustration-of-sky-blue-and-white-plain-grungy-background-illustration.jpg?s=612x612&w=0&k=20&c=9b5AmH_cG4ReajI649QvXRH73FF9imWYI_8Sg_c8ssk=)', 
          margin: "0 auto",
          padding: "20px",
          boxShadow: 3 
        }}
      >
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {singleJob.jobtitle || "Job Title"}
          </Typography>
          <Typography sx={{ fontSize: 14 }} component="div">
            {singleJob.company || "Company Name"}
          </Typography>
          <br/>
          <Typography variant="body2">
            {singleJob.location || "Location"}
          </Typography>
          <br/>
          <Typography>
            {singleJob.jobDescription || "Job Description"}
          </Typography>
        </CardContent> 
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
