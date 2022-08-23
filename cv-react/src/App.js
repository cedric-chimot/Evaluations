import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <div className="grid_container">
        <div className="sidebar">
          <User />
        </div>
        <div className="main">
          main
        </div>
      </div>
      
      {/* react, material ui, react-html2pdf */}
      {/* variables css */}
      {/* colonne de gauche */}

      {/* détails personnels - User */}
      {/* compétences - skills */}
      {/* langues - skills */}
      {/* react, material ui, react-html2pdf */}
      {/* centres d'intérêts - interests */}

      {/* colonne de droite */}
      {/* profil - profil */}
      {/* formations - formations  */}
      {/* exp - expériences */}

      {/* light/dark mode */}
      {/* génération pdf */}
    </div>
  );
}

export default App;
