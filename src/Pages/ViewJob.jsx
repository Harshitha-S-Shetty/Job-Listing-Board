import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ViewJob() {
  const [joblist, setJobList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("JobList"));
    setJobList(data || []);
  }, []);

  const handleDelete = (id) => {
    const filtered_data = joblist.filter((item) => item.JobList_id !== id);
    setJobList(filtered_data);
    localStorage.setItem("JobList", JSON.stringify(filtered_data));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        mt: 2,
        p: 2,
        backgroundImage: "url('https://media.istockphoto.com/id/1331579485/vector/background-curved-light-blue.jpg?s=612x612&w=0&k=20&c=Wslr-PIxcQDoxXmzC7_w8rbFM9_s_5Jz99tE3ftNM1A=')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {joblist && joblist.length > 0 ? (
        joblist.map((item) => (
          <Card
            key={item.JobList_id}
            sx={{
              minWidth: 300,
              maxWidth: 500,
              width: '100%',
              backgroundImage: 'url(https://media.istockphoto.com/id/1077910888/vector/vector-illustration-of-sky-blue-and-white-plain-grungy-background-illustration.jpg?s=612x612&w=0&k=20&c=9b5AmH_cG4ReajI649QvXRH73FF9imWYI_8Sg_c8ssk=)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'black',
              m: 1,
              '@media (max-width: 600px)': {
                minWidth: '90%',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {item.jobtitle}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                {item.company}
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                {item.location}
              </Typography>
              <Typography variant="body2">
                {item.jobDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" style={{ color: 'black' }}>Learn More</Button>
              <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <Link to={`/editjob/${item.JobList_id}`}>
                  <IconButton aria-label="edit" style={{ color: "black" }}>
                    <EditIcon />
                  </IconButton>
                </Link>
                <Link to={`/singlejob/${item.JobList_id}`}>
                  <IconButton aria-label="view" style={{ color: "black" }}>
                    <VisibilityIcon />
                  </IconButton>
                </Link>
                <IconButton aria-label="delete" style={{ color: "black" }} onClick={() => handleDelete(item.JobList_id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography variant="h6">No job list found</Typography>
      )}
    </Box>
  );
}
