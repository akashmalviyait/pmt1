import React, { useState, useEffect } from 'react'
import { Box, Container, Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from "../../services/employeeService";
import {Link } from 'react-router-dom'
import firebase from '../../Fire'




 const EmployeeForm = () => {


    const [icx, setIcx] = useState("")
    const [fcx, setFcx] = useState("")
    const [ccx, setCcx] = useState("")
    const [ccx1, setCcx1] = useState("")
    const [ccx2, setCcx2] = useState("")
    const [offer, setOffer] = useState("")

    const icxRegister = (e) => {
        e.preventDefault()
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
        e.preventDefault()
        console.log(icx)
        const itemsRef = firebase.database().ref('icx')
        const item = {
          'icx' : icx,
        time : datetime  
        }
        itemsRef.push(item)
        console.log("icx")
      }

      const ccx1Register = (e) => {
        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
        e.preventDefault()
        console.log(ccx1)
        const itemsRef = firebase.database().ref('ccx1')
        const item = {
          'ccx1' : ccx1,
        time : datetime  
        }
        itemsRef.push(item)
        console.log("ccx1")
      }
  
      const ccx2Register = (e) => {
        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
        e.preventDefault()
        console.log(ccx1)
        const itemsRef = firebase.database().ref('ccx2')
        const item = {
          'ccx2' : ccx2,
        time : datetime  
        }
        itemsRef.push(item)
        console.log("ccx2")
      }

      const fcxRegister = (e) => {
        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
        e.preventDefault()
        console.log(fcx)
        const itemsRef = firebase.database().ref('fcx')
        const item = {
          'fcx' : fcx,
        time : datetime  
        }
        itemsRef.push(item)
        console.log("fcx")
      }
  
      const ccxRegister = (e) => {
        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
        e.preventDefault()
        console.log(icx)
        const itemsRef = firebase.database().ref('ccx')
        const item = {
          'ccx' : ccx,
        time : datetime  
        }
        itemsRef.push(item)
        console.log("ccx")
        
      }
  

    const onIcxChangeHandler = event => {
        setIcx(event.target.value);  
        // console.log(icx)
      };
      const onFcxChangeHandler = event => {
        setFcx(event.target.value);
      };
      const onCcxChangeHandler = event => {
        setCcx(event.target.value);
      }; 
      const onofferChangeHandler = event => {
        setOffer(event.target.value);
      }; 
      const onCcx1ChangeHandler = event => {
        setCcx1(event.target.value);
      }; 
      const onCcx2ChangeHandler = event => {
        setCcx2(event.target.value);
      }; 

    return (
        // <Container >
            <Container>
                <Grid>
                        <Form >
                    <Controls.Input
                        name="icx"
                        label="Index"
                        value={icx}
                        onChange={onIcxChangeHandler}
                       
                    />
                      <Controls.Button
                            type="submit"
                            text="Submit" 
                            onClick={icxRegister}
                            />
                         </Form>
                       
                    <Form>
                    <Controls.Input
                        label="Forex"
                        name="fcx"
                        value={fcx}
                        onChange={onFcxChangeHandler}
                       
                    />
                      <Controls.Button
                            type="submit"
                            text="Submit" 
                            onClick={fcxRegister}
                            />
                    </Form>

                    <Form>
                    <Controls.Input
                        label="Corex"
                        name="ccx"
                        value={ccx}
                        onChange={onCcxChangeHandler}
                        
                    />
                      <Controls.Button
                            type="submit"
                            text="Submit"
                            onClick={ccxRegister}
                            />
                    </Form>

                    <Form>
                    <Controls.Input
                        label="Forex HNI"
                        name="ccx1"
                        value={ccx1}
                        onChange={onCcx1ChangeHandler}
                        
                    />
                      <Controls.Button
                            type="submit"
                            text="Submit" 
                            onClick={ccx1Register}
                            />
                    </Form>

                <Form> 
                    <Controls.Input
                        label="Comex HNI"
                        name="ccx2"
                        value={ccx2}
                        onChange={onCcx2ChangeHandler}
                   
                    />
                      <Controls.Button
                            type="submit"
                            text="Submit" 
                            onClick={ccx2Register}
                            />
                  </Form>
                   <Link to="/user">
                  <Controls.Button
                            type="submit"
                            text="Go TO User Data" 
                           
                            />
                </Link>
                
            </Grid>
        </Container>

    )
}

export default EmployeeForm