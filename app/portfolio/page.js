"use client"; 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../../components/appbar';
import { Button, CardActionArea, CardActions, Box, Grid, Item
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description';





const StyledCardActionArea = styled(CardActionArea)({
  '&:hover': {
    backgroundColor: '#E9D654',
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#000000',
  '&:hover': {
    backgroundColor: '#E9D654',
  color:'#000000' }
});




 const Portfolio = () => {

  

  return (
    <>
    <ResponsiveAppBar />
    <br/>
    <Grid container  spacing={2} style={{ width: '80%', margin:"0 auto" }} alignItems="stretch">

{/* 1 */}

      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>

        
        <CardMedia
          component="img"
          height="140"
          image="/001.jpg"
          alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}}gutterBottom variant="h5" component="div">
            SODEXO | Full Stack Dev
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, Typescript, Java, Redis, Azure DevOps, Docker, Jira, Scrum, Salesforce
          </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          As a Full-Stack Developer at Sodexo, we collaborated closely with the UI team and
a team of developers to create a web application providing financial services
for companies. Our project utilized React and TypeScript for the frontend,
ensuring type-safe and fully functional interfaces, while Java powered our backend
services. We worked together to develop and integrate APIs, delivering a robust
and user-friendly platform that met our clients’ financial needs. Additionally,
we employed tools like Azure and Docker to streamline deployment and ensure a
scalable, efficient development environment. We used SCRUM and Jira for the Agile
methodologies.
          </Typography>
        </CardContent>
      </StyledCardActionArea>
      <CardActions>
      <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://www.sodexo.com.mx/cotizador/"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>

{/* 2 */}


      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/002.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
            GRUPO ECO | Web Admin & Dev
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WHM, Cpanel, Apache Servers, Git, SSL Certificates, JavaScript, CSS, HTML5
          </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          Web administration and maintenance for all the Entretenimiento ECO Group which
comprises over 25 sites.
Administer Linux-based webhost, manage domains and hosting services, SSL
certificates and program updates to prevent downtime.
Support maintenance and creation of new pages.
Assist users with access requests and issues like logins and password resets.
Help users to develop capacity to manage their projects pages. Log problems that
have been identified by the team and bug fixing. Add / Remove Users.
Updated JS, CSS, HTML’s as necessary.
          </Typography>
        </CardContent>
     </StyledCardActionArea>
     <CardActions>
     <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://grupo.eco"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
     </Grid>

{/* 3 */}

      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/003.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
            FESTIVAL CEREMONIA [2022 & 2023] <br/>| Full Stack Dev
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, NodeJs, Material UI, Firebase, Sanity.IO, FB Pixel, TikTok Pixel,
Google Analytics, CSS, HTML
          </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for the last 2 editions [2022,2023] of the Festival.
Construction of site with REACT JS, and connection to the Firebase databases,
connection to SANITY.IO
API endpoints and CMS setup based on schemas.
Set up Events trackers with popular businesses managers like Facebook Pixel, and
Google Analytics.
Support maintenance and creation of new pages and functionalities.
Instructing the team how to self-manage the website to add more artists, change
texts, images and links.
Constant releases and updates of the website depending on the festival phases and
updated CSS/Material UI components and HTML’s as necessary.
          </Typography>
        </CardContent>
    </StyledCardActionArea>
    <CardActions>
    <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://axeceremonia.com/"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>

{/* 4 */}
      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/004.jpg"
            alt="portfolio-image"
        />
       <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
            Experiencia PLUS | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, NodeJs, Material UI, Redux, Firebase, Firestore,  MongoDB, Express, Stripe, WebSockets
                    </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for EXPERIENCIA PLUS a set of VIP experiencies for diverse events,
           the site has users and roles (FIREBASE / FIRESTORE) to manage and review purchases and reservations.
Development of graphic identity of website .
Construction of site with REACT JS, and setup of the Firebase databases,connected to SANITY.IO API endpoints and CMS setup, set up payments with STRIPE, and updated information with Web Hooks and Web Sockets, all transactions recorded to Mongo DB. Used Redux for the state management of the store.
Support maintenance and creation of new pages and functionalities.
Instructing the team how to self-manage the website to add more actors and
documents.
          </Typography>
        </CardContent>




     </StyledCardActionArea>
     <CardActions>
     <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://experiencia.plus/"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>

{/* 5 */}

      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/005.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
            ENTRETENIMIENTO.ECO | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, NodeJs, Material UI, Firebase, Sanity.IO, JavaScript, CSS, HTML
          </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for ENTRETENIMIENTO ECO, a production company based in Mexico City
which lists all the festivals and concerts produced by the company with a search bar
that looks in the API for an specific event and calendars. Development of graphic
identity of website and construction. Construction of site with REACT JS, and
connection to the Firebase databases, connection to SANITY.IO API endpoints and CMS
setup. Population of website’s DB.
Updated JS, CSS , Material UI and HTMLs as necessary and newer functionalities.
          </Typography>
        </CardContent>
    </StyledCardActionArea>
    <CardActions>
    <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://entretenimiento.eco"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>

{/* 6 */}


      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/006.jpg"
            alt="portfolio-image"
        />
       
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
            AKI AORA | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, NodeJs, Material UI, Firebase, Sanity.IO, JavaScript, CSS, HTML
          </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for AKI AORA, an artistic residency in Tulum that archives and lists
all of the projects and artists that have been part of the program.
Construction of site with REACT JS, and connection to the Firebase databases,
connection to SANITY.IO API endpoints for administration management.
Updated JS, CSS and HTMLs as necessary and construction of newer functionalities.
          </Typography>
        </CardContent>
    </StyledCardActionArea>
    <CardActions>
    <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://akiaora.com"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>

{/* 7 */}{/* 8 */}
 <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/009.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
            PANEA MEDIA | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, NodeJs, Bootstrap, Firebase, Redux, Sanity.IO
                    </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for the site of PANEA.MEDIA a talent agency, the site has protected
routes with passwords (REDUX) depending on the projects to be displayed.
Development of graphic identity of website along with the Agency’s design Team.
Construction of site with REACT JS, and setup of the Firebase databases,connected
SANITY.IO API endpoints and CMS setup.
Support maintenance and creation of new pages and functionalities.
Instructing the team how to self-manage the website to add more actors and
documents.
          </Typography>
        </CardContent>
     </StyledCardActionArea>
     <CardActions>
     <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://panea.media"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>


<Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/007.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
          Bravo GNP | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, NodeJs, Tailwind CSS, Sanity.IO
          </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for the last 2 editions [2022,2021] of the Festival
Development of graphic identity of website along with the Festival’s design Team.
Construction of site with REACT JS, and connection to the Firebase databases,
and SANITY.IO API endpoints and CMS setup. Set up Events trackers with popular
businesses managers like Facebook Pixel and Google Analytics. Support maintenance
and creation of new pages and functionalities.
Teaching the team how to self-manage the website to add more artists, change texts,
images and links.
Constant releases and updates of the website depending on the festival phases.
Updated JS, CSS and HTMLs as necessary.
          </Typography>
        </CardContent>
     </StyledCardActionArea>
     <CardActions>
     <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://bravognp.com"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>












      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/008.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
          LUXUS | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, SASS, Firebase, Redux (Thunk/Sagas), GraphQL, Stripe, TypeScript,
          Jest
                    </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for LUXUS with REACT JS, an online clothing store with cart, payment
method connected to STRIPE, auth based on email and google accounts, testing done
with JEST. Development of e-commerce with google and email-based authentication,
state saved as sessions to persist state on Redux, shopping cart, checkout page, and
payment processor with Stripe. Support maintenance and creation of new pages.
Set up REDUX store to persist state globally through the Thunk/Sagas middleware.
Migration to Typescript and set up GraphQL.
          </Typography>
        </CardContent>
    </StyledCardActionArea>
    <CardActions>
    <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://l-u-x-u-s.shop"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>





     



      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/010.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
          Cartel ECO | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          React, SASS, Firebase, Redux (Thunk/Sagas), GraphQL, Stripe, TypeScript,
          Jest
                    </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for CARTEL .ECO, a marketing agency based in México City which
lists all the projects and brands they have worked with. Construction of site with
REACT JS, added connection to SANITY’s API’s endpoints. Updated JS, CSS and HTMLs as
necessary.
          </Typography>
        </CardContent>
     </StyledCardActionArea>
     <CardActions>
     <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://cartel.eco"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>





      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/11.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
          Sanitary Tortilla Company  | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          Liquid, PHP, CSS
                    </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          WEB development for the e-commerce based in SAN ANTONIO, TEXAS. ! Development of
graphic identity and Construction of site.
Support maintenance and creation of new pages and functionalities. Teaching the team
how to self-manage the website to add more products, categories, etc. ! Update CSS
and HTMLs as necessary.
          </Typography>
        </CardContent>
    </StyledCardActionArea>
      <CardActions>
      <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://sanitarytortillacompany.com"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>





     



      <Grid item xs={12} sm={12} md={6} style={{ display: 'flex' }}>
        <Card style={{ width: '100%' }}>
        <StyledCardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image="/12.jpg"
            alt="portfolio-image"
        />
        <CardContent>
          <Typography style={{fontFamily:"atlas"}} gutterBottom variant="h5" component="div">
          Alfonsos Tamales | Web Developer
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            TECH STACK:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          Liquid, PHP, CSS
                    </Typography><br/>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
            PROJECT DESCRIPTION:
          </Typography>
          <Typography  style={{fontFamily:"atlas"}}  variant="body2" color="text.secondary">
          Development of graphic identity and Construction of site. Support maintenance and
creation of new pages and functionalities. Teaching the team how to self-manage the
website to add more products, categories, etc. Updated CSS and HTMLs as necessary.
          </Typography>
        </CardContent>
     </StyledCardActionArea>
     <CardActions>
     <StyledButton 
        size="small" 
        variant="contained" 
        
      >
        <a href="https://alfonsostamales.com"  target="_blank" rel="noopener noreferrer" >
  Visit
</a>
      </StyledButton>
      </CardActions>
    </Card>
      </Grid>




     
         

      








    </Grid> 
  </>
    
  );
}

export default Portfolio;
