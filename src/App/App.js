import React from 'react';
import SideMenu from "../components/SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from "../components/Header";
import PageHeader from '../components/PageHeader';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Employees from "../pages/Employees/Employees";
import UserDetails from '../pages/userDetails/UserDetailform';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

//settings
const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />

      <div className={classes.appMain}>
        {/* <Header /> */}
        <Router>
          <Switch>
          <Route exact path="/" component={Employees} />
             <Route exact path="/user" component={UserDetails}  />
             {/* <Redirect to="/data" from="/" /> */}
          </Switch>
        </Router>
        
        {/* <Employees /> */}
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
