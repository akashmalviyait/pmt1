import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from "../../services/employeeService";
import firebase from '../../Fire'
import {Link } from 'react-router-dom'

const UserDetailsForm = () => {

    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [icxc, seticxc] = useState("")
    const [fcxc, setfcxc] = useState("")
    const [ccxc, setccxc] = useState("")  
    const [ccxc1, setccxc1] = useState("")  
    const [ccxc2, setccxc2] = useState("")  
    const [icxdateBegin, seticxDateBegin] = useState("")
    const [icxdateEnd, seticxDateEnd] = useState("")
    const [ccxdateBegin, setccxDateBegin] = useState("")
    const [ccxdateEnd, setccxDateEnd] = useState("")
    const [fcxdateBegin, setfcxDateBegin] = useState("")
    const [fcxdateEnd, setfcxDateEnd] = useState("")
    const [ccx1dateBegin, setccx1DateBegin] = useState("")
    const [ccx1dateEnd, setccx1DateEnd] = useState("")
    const [ccx2dateBegin, setccx2DateBegin] = useState("")
    const [ccx2dateEnd, setccx2DateEnd] = useState("")
    const [payment, setpayment] = useState("")

    const userService = (e) => {
      console.log("I am Clicked")
      firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        // console.log(user)
        console.log(res.user.uid)
        firebase.database().ref('/users/' + res.user.uid)
        .set({
          'email' : email,
          'icxservice' : icxc,
          'fcxservice' : fcxc,
          'ccxservice' : ccxc,
          'ccx1service' : ccxc1,
          'ccx2service' : ccxc2,
          'icxdatebegin' : icxdateBegin,
          'icxdateend' : icxdateEnd,
          'fcxdatebegin' : fcxdateBegin,
          'fcxdateend' : fcxdateEnd,
          'ccxdatebegin' : ccxdateBegin,
          'ccxdateend' : ccxdateEnd,
          'ccx1datebegin' : ccx1dateBegin,
          'ccx1dateend' : ccx1dateEnd,
          'ccx2datebegin' : ccx2dateBegin,
          'ccx2dateend' : ccx2dateEnd,
          'payment' : payment,
          'time' : datetime  
        })

      })
      var currentdate = new Date(); 
      var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
      e.preventDefault()
    }

    const onEmailChangeHandler = event => {
        setemail(event.target.value)
      }
      const onicxcChangeHandler = event => {
        seticxc(event.target.value)
      }
      const onfcxcChangeHandler = event => {
        setfcxc(event.target.value)
      }
      const onccxcChangeHandler = event => {
        setccxc(event.target.value)
      }
      const onccxc1ChangeHandler = event => {
        setccxc1(event.target.value)
      }
      const onccxc2ChangeHandler = event => {
        setccxc2(event.target.value)
      }
      const onpassowrdHandler = event => {
        setPassword(event.target.value)
      }
      const onicxstartHandler = event => {
          seticxDateBegin(event.target.value)
        }
      const onicxendHandler = event => {
          seticxDateEnd(event.target.value)
        }
  
        const onfcxstartHandler = event => {
          setfcxDateBegin(event.target.value)
        }
      const onfcxendHandler = event => {
          setfcxDateEnd(event.target.value)
        }
  
        const onccxstartHandler = event => {
          setccxDateBegin(event.target.value)
        }
      const onccxendHandler = event => {
          setccxDateEnd(event.target.value)
        }
        
        const onccx1startHandler = event => {
            setccx1DateBegin(event.target.value)
          }
        const onccx1endHandler = event => {
            setccx1DateEnd(event.target.value)
          }
    
          const onccx2startHandler = event => {
            setccx2DateBegin(event.target.value)
          }
        const onccx2endHandler = event => {
            setccx2DateEnd(event.target.value)
          }
          const onPayHandler = event => {
            setpayment(event.target.value)
          }
          


    return (
      <>
        <Form onSubmit={userService} >
           

            <Grid container>

            <Grid item xs={3} >
            <Controls.Input
                        label="Email"
                        name="email"
                        value={email}
                        onChange={onEmailChangeHandler}
                        type="email"
                    />

            <Controls.Input
                        label="Payment"
                        name="payment" value={payment} type="text"  onChange={onPayHandler}
                    />

            <Controls.Input
                        label="Password"
                        name="password" 
                        value={password} 
                        type="password"
                         onChange={onpassowrdHandler}
                    /> 
                     
            </Grid>


                <Grid item xs={3}>
                       
                    <Controls.Input
                        label="Index"
                        name="icxc" value={icxc} type="text"  onChange={onicxcChangeHandler} 
                    />
                
                <Controls.Input
                        name="icxdatebegin"
                        label="Index Date begin"
                        value={icxdateBegin}
                        onChange={onicxstartHandler}
                    />

            <Controls.Input
                        label="Index Date End"
                        name="end date" value={icxdateEnd} type="date"  onChange={onicxendHandler}
                    />
                    
                 

                </Grid>
                <Grid item xs={3}>
                     
                <Controls.Input
                        label="Forex"
                       name="fcxc" value={fcxc} type="text" onChange={onfcxcChangeHandler}
                        
                    />

                <Controls.Input
                        label="Forex Date begin"
                        name="start date" value={fcxdateBegin} type="date" onChange={onfcxstartHandler}
                    />

            <Controls.Input
                        label="Forex Date End"
                        value={fcxdateEnd}
                        onChange={onfcxendHandler}
                    />
                </Grid>

                <Grid item xs={3}>
                     
                <Controls.Input
                        label="Comex"
                       name="email" value={ccxc} type="text"   onChange={onccxcChangeHandler}
                        
                    />

             <Controls.Input
                       
                        label="Comex Date begin"
                        name="start date" value={ccxdateBegin} type="date" onChange={onccxstartHandler}
                    />

            <Controls.Input
                       
                        label="Comex Date End"
                        name="end date" value={ccxdateEnd} type="date"  onChange={onccxendHandler}
                    />

                </Grid>

                <Grid item xs={6}>
                     
                <Controls.Input
                        label="Index HNI"
                        name="ccx 1" value={ccxc1} type="text"   onChange={onccxc1ChangeHandler}
                        
                    />

                <Controls.Input
                        
                        label="Comex Date begin"
                        name="start date" value={ccx1dateBegin} type="date" onChange={onccx1startHandler}
                    />

            <Controls.Input
                        
                        label="Comex Date End"
                        name="end date" value={ccx1dateEnd} type="date"  onChange={onccx1endHandler}
                    />


                </Grid>

                <Grid item xs={6}>
                     
                <Controls.Input
                        label="Comex HNI"
                        name="ccx 2" value={ccxc2} type="text"   onChange={onccxc2ChangeHandler}
                        
                    />
                  <Controls.Input
                        label="Comex Date begin"
                        name="start date" value={ccx2dateBegin} type="date" onChange={onccx2startHandler}
                    />

            <Controls.Input
                        label="Comex Date End"
                        name="end date" value={ccx2dateEnd} type="date"  onChange={onccx2endHandler}
                    />

                </Grid>
            </Grid>

            <center>
            <Controls.Button
                            type="submit"
                            text="Submit" />
          </center>
        </Form>
<center>
<Link to="/">
<Controls.Button
          type="submit"
          text="Go TO Message Portal" 
          />
</Link>
</center>
</>
        
    )
}

export default UserDetailsForm