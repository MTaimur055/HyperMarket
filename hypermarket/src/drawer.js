import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './drawer.css';
import SubjectIcon from '@material-ui/icons/Subject';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import Collapse from '@material-ui/core/Collapse';
import ViewDayTwoToneIcon from '@material-ui/icons/ViewDayTwoTone';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import RestaurantMenuTwoToneIcon from '@material-ui/icons/RestaurantMenuTwoTone';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import TimelineTwoToneIcon from '@material-ui/icons/TimelineTwoTone';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root1: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
 
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.root1}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
         
         <div _ngcontent-c7="" class="row col-8 image-card-row d-flex ng-star-inserted">
      <div _ngcontent-c7="" class="d-flex align-items-center header-strip">
      <img src='https://admin.yelo.red/en/assets/images/yelo-logo.png' alt='logo'></img>
         <div _ngcontent-c7="" class="image-card ng-star-inserted">
            <i _ngcontent-c7="" class="yf yf-browser logo-img"></i>
            <p _ngcontent-c7="" class="m-0">View Website</p>
          </div>
    
        <div _ngcontent-c7="" class="image-card ng-star-inserted " style={{margin: '0 25px'}}>
          <i _ngcontent-c7="" class="yf yf-phone-call logo-img"></i>
          <p _ngcontent-c7="" class="m-0">Customer App</p>
        </div>
      <div _ngcontent-c7="" class="image-card ng-star-inserted">
          <i _ngcontent-c7="" class="yf yf-merchanticon logo-img"></i>
          <p _ngcontent-c7="" class="m-0">Business App</p>
        </div>
      </div>
    </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <List
      
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          < SubjectIcon />
        </ListItemIcon>
        <ListItemText primary="Get Started" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HomeTwoToneIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          < ViewDayTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <  RestaurantMenuTwoToneIcon  />
        </ListItemIcon>
        <ListItemText primary="Restaurants" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          < StorefrontTwoToneIcon  />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
     <ListItem button>
        <ListItemIcon>
          < PermIdentityTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          < TimelineTwoToneIcon/>
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        
        <ListItemText primary="Marketing" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
        
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
          <Divider />
         
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
       
      </main>
    </div>
  );
}
