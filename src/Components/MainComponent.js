import React,{useEffect} from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import Experiences from './Experiences';
import Education from './Education';
import Reviews from './Reviews';
import Skills from './Skills';
import { connect } from 'react-redux';
import {fetchData} from "../redux/ActionsCreator"


const mapStateToProps = state => {
   return {
      data : state.data
   } 
}

const mapDispatchToProps = {
     fetchData
}

function App(props) {
   useEffect(() => {
         props.fetchData();
 },[]);
  
  const data =props.data.data[0]
  const loading = props.data.isLoading

  return (
    <div>
        <Nav/>
        <Hero />
        <Projects projects={data.projects} loading={loading}/>
        <Skills loading={loading}/>
        <Experiences jobs={data.jobs} loading={loading}/>
        <Education education={data.education} loading={loading}/>
        <Reviews loading={loading} />
    </div>
    
    )
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);;