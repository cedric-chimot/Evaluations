import './App.css';
import User from './components/User';
import Skills from './components/Skills';
import Profil from './components/Profil';
import FormationsExperiences from './components/FormationsExperiences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Preview, print } from "react-html2pdf"
import DarkMode from './components/DarkMode';

function App() {
  const handleGenerateCv = () => {
    let cvTemplate = document.getElementById("cv-print")
    cvTemplate.setAttribute("style", "width:210mm !important")
    cvTemplate.classList.add("cv-print")
    document.body.classList.remove("dark")
    setTimeout(() => {
      print("cv", "cv-print")
      cvTemplate.setAttribute("style", "width:100% !important")
      cvTemplate.classList.remove("cv-print")
    }, 300)
  }

  return (
    <Preview id={"cv-print"} class="cv-print">
      <div className="App">
        <div className="grid_container">
          <div className="sidebar">
            <div className="actions">
              <DarkMode />
              <button onClick={handleGenerateCv} id="pdf">
                <FontAwesomeIcon icon={faFilePdf} size="lg" />
              </button>
            </div>
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <FormationsExperiences />
          </div>
        </div>
      </div>
    </Preview>
  );
}

export default App;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons'