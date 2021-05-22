import logo from './logo.svg';
import './App.css';
// import CKEditor from "react-ckeditor-component";
import {CKEditor} from '@ckeditor/ckeditor5-react';
// import Editor from '@ckeditor/ckeditor5-editor-inline';
// import Editor from 'ckeditor5-custom-inline-build';
// import Editor from './lib/ckeditor';
import Editor from 'ckeditor5-custom-build';


function App() {
  console.log('editor local ----------- ',Editor);
  const onBlur = (event, editor) => {
    console.log( 'Blur.', editor );
  };

  const onFocus = (event, editor) => {
    console.log( 'Focus.', editor );
  };

  const onInit = (editor) => {
    console.log( 'Editor is ready to use!', editor );
  };

  const editorConfiguration = {
    
      toolbar: ['bold', 'italic', 'alignment', 'strikethrough']
    
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <CKEditor
            editor={Editor}
            data={"<p>Hello from CKEditor 5!</p>"}
            config={editorConfiguration}
        />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
