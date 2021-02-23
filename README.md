<p align="center">
 <img width="150" src="https://pbs.twimg.com/media/EVf6Z8rWoAQdMvG.jpg" alt="JinSS3 logo"></a></p>
</p>

<h1 align="center">React Drop Zone Responsive (beta version)</h1>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)[![npm latest package](https://img.shields.io/badge/npm%40latest-2.7.x-orange)](https://www.npmjs.com/package/react-drop-zone-responsive)

This is my very first npm package, so if you have any issue or suggestion let me know on the github section "[issues](https://github.com/JinSSJ3/react-drop-zone-responsive/issues)".

## Description

Amazing [React](https://reactjs.org/) drop zone component for loading files.

#### Features:

- Basic input button is included.
- Free handling: You are free to handle the loaded files because this component returns an array of files each of them has 2 properties (the own file and an array of errors according to the limits you set).
- Usable: It will fit the parent container.
- Customizable: you can change the color to fit with your theme.
- *File reading `(csv, txt, json, xlsx)`: soon in future releases*

## Installation

React-drop-zone-responsive is available as an [npm package](https://www.npmjs.com/package/react-drop-zone-responsive).

```sh
// with npm
npm i react-drop-zone-responsive
```

## Usage (example)

Here is a quick example to get you started, **it's all you need**:

In this exaple we are telling the drop zone:

- to admit up to 4 files (if you pick more it will take the first 4 files).
- to admit files size up to 50 mb.
- to admit fies with extensions `"json", "exe", "pdf", "png"`
- to admit files wich mimetype is included in the list: `"application/json", "image/png"`

Styling: You can style the component giving the color theme and a nice background image from internet.

- color: `#ff5733`
- backgroundImage: `"https://miro.medium.com/max/670/1*wPqqYFfNreXF4INrNhYkeQ.jpeg"`

````jsx
import "./styles.css";
import DropZone from "react-drop-zone-responsive";
import { useState } from "react";
const useLimits = {
  extensions: ["json", "pdf", "png"], //admited extensions
  mimeType: ["application/json", "application/pdf", "image/png"], //admited mymetypes
  maxSize: 50 // MB
};
const useDropZoneStyles = {
  color: "teal", 
  //theme color: could also be "rgb: rgb(255,254,45)", "hex: #0000ff"
  backgroundImage:
    "https://miro.medium.com/max/670/1*wPqqYFfNreXF4INrNhYkeQ.jpeg"
};

const numberOfFiles = 4;

const App= (props) => {
  const [fileListCheck, setFileListCheck] = useState([]);
  const [fileListError, setFileListError] = useState([]);
  const handleFileSelect = (files) => {
    let filesCheck = [];
    let filesError = [];
    files.forEach((f) => {
      if (f.errors.length > 0) {
        filesError.push(f.file);
        f.errors.forEach((element, index) => {
          console.log(`Error ${index}: ${element}`);
        });
      } else {
        filesCheck.push(f.file);
      }
    });
    setFileListCheck(filesCheck);
    setFileListError(filesError);
  };
  return (
    <div className="App">
      <h1>Wellcome to React Drop Zone Responsive on CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Component in construction BTW</p>
      <DropZone
        style={useDropZoneStyles}
        amountOfFiles={numberOfFiles}
        limits={useLimits}
        handleFileSelect={handleFileSelect}
      />
      <h3>{`List of files without errors (${fileListCheck.length})`}</h3>
      <li>
        {fileListCheck.map((f, index) => (
          <ul>{f.name}</ul>
        ))}
      </li>
      <h3>{`List of files with errors (${fileListError.length})`}</h3>
      <li>
        {fileListError.map((f, index) => (
          <ul>{f.name}</ul>
        ))}
      </li>
      <h2>Also check the console to see the errors, if any</h2>
    </div>
  );
};
export default App;


````


Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dropzone-test-wztkb?file=/src/App.js)

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
