import React from 'react'
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import UserDetailsForm from './UserDetailform';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const userDetails = () => {

    const classes = useStyles();

    return (
        <>
        <PageHeader
            title="Admin Dashboard"
            subTitle="To Send Data"
            icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
        
        <Paper className={classes.pageContent}>
           <UserDetailsForm />
        </Paper>
    </>
    )
}

export default userDetails
