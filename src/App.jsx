import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
//import './App.css';
import EditForm from './components/EditForm.jsx';

function App() {

  return (
    <>
      
      <section id="general-info">
        <EditForm sectionTitle="General info" 
          fieldList={["Name", "Email", "Phone"]} />
      </section>

      <section id="education">
        <EditForm sectionTitle="Education" 
          fieldList={["School Name", "Title of study", "Date of study"]} />
      </section>

      <section id="work-experience">
        <EditForm sectionTitle={"Work Experience"} 
          fieldList={["Company Name", "Position Title", "Main responsibilities", "Start date", "End date"]} />
      </section>

    </>
  )
}

export default App
