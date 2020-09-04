import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import { Link } from '@material-ui/core';

export const mainListItems = (
  <div>
        <ListSubheader inset >General</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Get Started" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HomeRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        < RestaurantMenuRoundedIcon />
      </ListItemIcon>
      <ListItemText primary=" Restaurant" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorefrontRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="./Customers.js">
      <ListItemText primary="Customers" />
      </Link>
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <TimelineRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
  
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);