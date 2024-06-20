
"use client";
import Image from "next/image";
import ResponsiveAppBar from '../components/appbar'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import DescriptionIcon from '@mui/icons-material/Description';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));







function FullWidthGrid() {

  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          text: 'Here is something interesting I wanted to share with you.',
          url: window.location.href,
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      // Fallback for desktop browsers
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('URL copied to clipboard');
      } catch (error) {
        console.error('Failed to copy URL to clipboard:', error);
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1, width: "85%" }}>

      {/* FIRST GRID */}

      <Grid container xs={12} spacing={2}>
        <Grid xs={12} md={8} sm={12} >
          <Item sx={{ backgroundColor: "#E9D654" }} >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
              <Avatar alt="Remy Sharp" src="foto.png" sx={{ width: 86, height: 86 }} />
            </div>
            <br />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  ml: 2,
                  display: { xs: 'flex', md: 'flex', sm: 'flex', },
                  fontFamily: 'atlas',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 700,
                  letterSpacing: '0.3rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                OCTAVIO MÁRQUEZ
              </Typography>
              <Typography
                sx={{
                  mt: 1, // Adds a margin top to separate the two texts slightly
                  mr: 2,
                  ml: 2,
                  textAlign: "justify",
                  display: 'flex',
                  fontFamily: 'atlas',
                  fontWeight: 800,
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Seeking a team to build innovative products. Proficient in FullStack Development,
                especializing in ReactJS frontend and Node/Express backend - MERN Stack, with a
                focus on user-facing visual interfaces and a strong design background. Currently
                finishing a Post Graduate Program in Artificial Intelligence and Machine Learning
                for Business Applications, and a Post Graduate Program in Cyber Security at the University of Texas. Interested in Blockchain
                Technologies and Quantum Computing, IoT, GAN’s & Large Language Models.
              </Typography>
            </Box>



          </Item>

        </Grid>
        <Grid xs={12} md={4} sm={8} >
          <Item>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  ml: 2,
                  display: { xs: 'flex', md: 'flex', sm: 'flex', },
                  fontFamily: 'atlas',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 700,
                  letterSpacing: '0.3rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                EDUCATION      </Typography>


              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2, mt: 1, // Adds a margin top to separate the two texts slightly
                mr: 2,
                ml: 2, textAlign: "left",
                listStyleType: 'none',
                fontFamily: 'atlas',
                fontWeight: 800,
                '& li:nth-of-type(odd)': {
                  display: 'list-item',
                  listStyleType: 'disc'
                }
              }}>
                <li>UNIVERSIDAD AUTÓNOMA DE NUEVO LEÓN [2008]</li>
                <li>Bachelor of Visual Arts</li>
                <li>UNIVERSITY OF TEXAS [2024]</li>
                <li>Post Graduate Program in Artificial Intelligence
                  and Machine Learning for Business Applications</li>
                <li>UNIVERSITY OF TEXAS [2024]</li>
                <li>Post Graduate Program in Cyber Security[in course]</li>
              </Box>

            </Box></Item>
        </Grid>
        <Grid xs={12} sm={4} md={4}>
          <Item>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  ml: 2,
                  display: { xs: 'flex', md: 'flex', sm: 'flex', },
                  fontFamily: 'atlas',
                  fontWeight: 700,
                  letterSpacing: '0.3rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                LANGUAGES      </Typography>
              <Box component="ul" aria-labelledby="category-a" 
              sx={{
                pl: 2, mt: 1, // Adds a margin top to separate the two texts slightly
                mr: 2,
                ml: 2, textAlign: "left",
                listStyleType: 'none',
                fontFamily: 'atlas',
                fontWeight: 800,
                '& li:nth-of-type(odd)': {
                  display: 'list-item',
                  listStyleType: 'disc'
                }
              }}>
                <li>ENGLISH [100%]</li>
                <li></li>
                <li>SPANISH [100%]</li>
                <li>Professional Proficiency</li>

              </Box>


            </Box></Item>
        </Grid>
        <Grid xs={12} sm={12} md={8}>
          <Item>
             <Box 
             sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: 'flex', md: 'flex', sm: 'flex', },
                fontFamily: 'atlas',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
                letterSpacing: '0.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              CERTIFICATIONS      </Typography>
            <Box component="ul" aria-labelledby="category-a" sx={{
              pl: 2, mt: 1, // Adds a margin top to separate the two texts slightly
              mr: 2,
              ml: 2, textAlign: "left",
              listStyleType: 'none',
              fontFamily: 'atlas',
              fontWeight: 800,
              '& li:nth-of-type(odd)': {
                display: 'list-item',
                listStyleType: 'disc'
              }
            }}>
              <li>UDEMY [2022]</li>
              <li>NodeJS - The Complete Guide [MVC, REST APIs, GraphQL]</li>
              <li>UDEMY [2021]</li>
              <li>SR REACT JS Developer [Redux (Thunk, Saga), Hooks, GraphQL, Firebase]</li>
              <li>UDEMY [2021]</li>
              <li>Complete NODE JS Developer [Express, GraphQL, REST, MongoDB, SQL, MERN]</li>
              <li>UDEMY [2015 / 2018]</li>
              <li>React JS - Courses</li>
              <li>3CT [CDMX] [2015 / 2016]</li>
              <li>Programming courses [Javascript, PHP, JQuery, DB’s]</li>
              <li>CETI - UNIVERSIDAD AUTÓNOMA DE NUEVO LEÓN [2010]</li>
              <li>Web Design Course</li>
            </Box>


          </Box></Item>
        </Grid>
      </Grid>







      {/* SECOND GRID */}








      <Grid container xs={12} spacing={2}>
        <Grid xs={12} md={12} lg={4}>
          <Item><Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'flex', md: 'flex', sm: 'flex', },
              fontFamily: 'atlas',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 700,
              letterSpacing: '0.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            SKILLS      </Typography></Item>
        </Grid>
        <Grid container xs={12} md={12} lg={8} spacing={4}>
          <Grid xs={6} md={6} lg={3}>
            <Item>
              <Box
                id="category-a"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                LANGUAGES
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>JavaScript <br />[ES6]</li>
                <li>Typescript</li>
                <li>Pyhton</li>
                <li>HTML5 + CSS3</li>
              </Box>
            </Item>
          </Grid>

          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-b"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                FRONT END
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left", fontFamily: 'atlas'
                }
              }}>
                <li>React JS</li>
                <li>Redux [Thunk/Saga]</li>
                <li>Next JS</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-c"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                BACK END
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>Node.JS</li>
                <li>Express</li>
                <li>GraphQL</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-d"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                Databases
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Sanity IO</li>
                <li>Firebase</li>
                <li>Firestore</li>

              </Box>
            </Item>
          </Grid>
        </Grid>












        <Grid container xs={12} md={12} lg={12} spacing={4}>
          <Grid xs={6} lg={2}>
            <Item>
              <Box
                id="category-a"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                LIBRARIES
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Reactstrap</li>
                <li>EJS</li>
              </Box>
            </Item>
          </Grid>

          <Grid xs={6} lg={2}>
            <Item>
              <Box
                id="category-b"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                CLOUD
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>Heroku</li>
                <li>GitHub</li>
                <li>AWS S3</li>
                <li>AWS EC2</li>
                <li>NETLIFY</li>
              </Box>
            </Item>
          </Grid>

          <Grid xs={6} lg={2}>
            <Item>
              <Box
                id="category-c"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase',
                  fontFamily: 'atlas',

                }}
              >
                CI/CD
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>Azure DevOps</li>
                <li>Docker</li>
                <li>GitFlow</li>
              </Box>
            </Item>
          </Grid>

          <Grid xs={6} lg={2}>
            <Item>
              <Box
                id="category-d"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                TESTING
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>Jest</li>
                <li>Enzyme</li>

              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={2}>
            <Item>
              <Box
                id="category-d"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase',
                  fontFamily: 'atlas',

                }}
              >
                MGMT
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>SCRUM</li>
                <li>Jira</li>
                <li>Microsoft Teams</li>
              </Box>
            </Item>
          </Grid>

          <Grid xs={6} lg={2}>
            <Item>
              <Box
                id="category-d"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                TOOLS
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>VS Code</li>
                <li>Chrome’s <br />DevTools</li>
                <li>React <br />Components</li>
                <li>Redux <br />Devtools</li>
              </Box>
            </Item>
          </Grid>



        </Grid>





        <Grid container xs={12} md={12} lg={12} spacing={4}>
          <Grid xs={12} sm={6} lg={6}>
            <Item>
              <Box
                id="category-a"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase',
                  fontFamily: 'atlas',

                }}
              >
                DATA SCIENCE
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>

              </Box>
            </Item>
          </Grid>

          <Grid xs={12} sm={6} lg={6}>
            <Item>
              <Box
                id="category-b"
                sx={{
                  fontSize: '12px', textTransform: 'uppercase', fontFamily: 'atlas',
                }}
              >
                MACHINE LEARNING
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{
                pl: 2,
                listStyleType: 'none', // Set default list style to none
                '& li': {
                  display: 'list-item',
                  listStyleType: 'disc', // Apply disc style to li elements
                  textAlign: "left",
                  fontFamily: 'atlas',

                }
              }}>
                <li>Scikit-Learn</li>
                <li>XGBoost</li>
                <li>Imbalanced-learn</li>

              </Box>
            </Item>
          </Grid>



        </Grid>




        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px',  }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item sx={{fontFamily:"atlas"}}>OS: MAC OS - PRO MAX 3</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
          <Grid>
              <Item sx={{fontFamily:"atlas"}}>
              <a href="/AOMA_CV_2024.pdf" download style={{ textDecoration: 'none', color: 'inherit' }}>
              Download CV <FileDownloadIcon/><DescriptionIcon/>
              </a></Item>
            </Grid>
            <Grid>
              <Item>  <a href="tel:+525631399280" style={{ textDecoration: 'none', color: 'inherit' }}>
            <LocalPhoneIcon />
          </a></Item>
            </Grid>
            <Grid>
              <Item> <a href="mailto:octaviomrq@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            <EmailIcon />
          </a></Item>
            </Grid>
            <Grid>
              <Item > <ShareIcon onClick={handleShare}/></Item>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}






export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <br/>
       <main className="flex min-h-screen flex-col items-center justify-between ">
        <FullWidthGrid />
      </main> 
    </>
  );
}
