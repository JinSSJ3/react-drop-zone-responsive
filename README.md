<p align="center">
 <img align="center" width="175" src="https://user-images.githubusercontent.com/43678736/110726474-6fea8100-81e7-11eb-925e-e40750809989.png" alt="Unlimited React components logologo"></p>
</p>

<h1 align="center">Unlimited React Components</h1>
<h2 align="center">React Drop Zone</h2>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JinSSJ3/react-drop-zone-responsive/blob/HEAD/LICENSE)[![npm latest package](https://img.shields.io/badge/npm%40latest-1.2.8-red)](https://www.npmjs.com/package/react-drop-zone-responsive)

This is my very first npm package, so if you have any issue or suggestion let me know it on the github section: "[issues](https://github.com/JinSSJ3/react-drop-zone-responsive/issues)".

## Description

Amazing [React](https://reactjs.org/) drop zone component for loading and validating input files.

<p align="center">
 <img width="100%" src="https://user-images.githubusercontent.com/43678736/109107931-9812b400-7700-11eb-802d-e3f23b5bfc38.png" alt="demo-drop-zone"></a></p>
</p>
<p align="center">
 <img width="100%" src="https://user-images.githubusercontent.com/43678736/109116010-de224480-770d-11eb-9bb6-52f78bd7c0bf.png" alt="demo-drop-zone"></a></p>
</p>

## Installation

React-drop-zone is available as an [npm package](https://www.npmjs.com/package/react-drop-zone-responsive).

```sh
// with npm
npm i @unlimited-react-components/react-drop-zone-responsive
```

## Main Features:

- Input File Button included.
- Free handling: You are free to handle the loaded files because this component returns an array of files each of them has 2 properties (the own file and an array of errors according to the limits you set).
- Usable: It will fit the parent container. So make sure you git it an appropiate container.
- Customizable: you can change the theme color to combine correctly with the rest of the page.
- Localization: English and Spanish versions.
- ***File reading**: `(csv, txt, json, xlsx)`: *soon**in future releases*

## Usage (example)

Here is an example to get you started, **it's all you need**:

In this exaple we are telling the drop zone:

- to admit up to 4 files (if you pick more it will take the first 4 files).
- to admit files size up to 50 mb.
- to admit fies with extensions `"json", "exe", "pdf", "png"`
- to admit files wich mimetype is included in the list: `"application/json", "image/png"`

**Styling**:

You can style the component giving the color theme and a nice background image got from internet.

- themeColor: `#ff5733`
- backgroundImage: `"https://miro.medium.com/max/670/1*wPqqYFfNreXF4INrNhYkeQ.jpeg"`

You can also style the text ( in this example I am using fonts from [Google fonts](https://fonts.google.com/)). It is necessary to add the corresponding link tag on the `index.html` file.

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dropzone-test-wztkb?file=/src/App.js)

````html
<!DOCTYPE html>
<html lang="en">
  <head>
   ...
  <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Long+Cang&display=swap"
      rel="stylesheet"
    />
    ...
</head>

  <body>
      ...
  </body>
</html>
````

````jsx
// App.jsx
import "./styles.css";
import { DropZone } from "react-drop-zone-responsive";
import { useState } from "react";

const useLimits = {
  extensions: ["json", "pdf", "png"], //admited extensions
  mimeType: ["application/json", "application/pdf", "image/png"], //admited mymetypes
  maxSize: 50 // MB
};
//font family got from google fonts:
//https://fonts.google.com/specimen/Indie+Flower?preview.text_type=custom&sidebar.open=true&selection.family=Indie+Flower
const useDropZoneStyles = {
  //themeColor: "teal",
  //theme color: could also be "rgb: rgb(255,254,45)", "hex: #0000ff"
  // themeColor: "#0000ff",
  themeColor: "RgB(200,45,28)",
  backgroundImage:
    "https://miro.medium.com/max/670/1*wPqqYFfNreXF4INrNhYkeQ.jpeg",
  //"https://programacion.net/files/article/20170331010346_json.png",
  mainTextStyle: {
    fontFamily: "",
    color: "",
    fontSize: ""
  },
  bottonTextStyle: {
    fontFamily: "",
    color: "",
    fontSize: ""
  }
  //backgroundColor: "#013e62"
};

const numberOfFiles = 4;

const App = (props) => {
  const [fileListCheck, setFileListCheck] = useState([]);
  const [fileListError, setFileListError] = useState([]);
  const handleFileSelect = (files) => {
    let filesCheck = [];
    let filesError = [];
    files.forEach((f) => {
      if (f.errors.length > 0) {
        filesError.push(f.file);
        f.errors.forEach((element, index) => {
          console.log(`${f.file.name}: Error ${index}: ${element}`);
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
      <h1 style={useDropZoneStyles.mainTextStyle}>
        Wellcome to React Drop Zone Responsive on CodeSandbox
      </h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Component in construction BTW</p>

      <DropZone
        style={useDropZoneStyles}
        amountOfFiles={numberOfFiles}
        limits={useLimits}
        handleFileSelect={handleFileSelect}
        //localization={"es-ES"}
      />

      <h3>{`List of files without errors (${fileListCheck.length})`}</h3>
      <li>
        {fileListCheck.map((f, index) => (
          <ul key={index}>{f.name}</ul>
        ))}
      </li>
      <h3>{`List of files with errors (${fileListError.length})`}</h3>
      <li>
        {fileListError.map((f, index) => (
          <ul key={index}>{f.name}</ul>
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

## Props (all are optional)


| Name | Description | Default |
| - | - | - |
| `style` | Object that contains the main styles for the component. | {`themeColor:#ff6c37`,`backgroundImage:"https://www.postman.com/assets/use-cases-by-role.svg"`} |
| `limits` | Object that contains the criteria to validate files that we want to load and files we don't. | `undefined`: allows any kind of file |
| `amountOfFiles` | The number of files to consider. | 10 |
| `handleFileSelect` | The handler function when files are droped or selected. This function receives the list of files after validation. | `undefined` |
| `localization` | The corresponding translation for languages.<br />Supporting now English `en-EN` and Spanish `es-ES`. | `en-EN`: by default |

### Props.style

- **themeColor**?: Main color for borders and button theme color.
- **mainTextStyle**? and **bottonTextStyle**?: Styles for labels on the top and botton.
  - fontFamily?: string;
  - color?: string;
  - fontSize?: string | number;
- **backgroundImage**?: An url to an image on internet to fit the background of the drop zone.
- **backgroundColor**?: The background color, by default is white.

### Props.limits

* **extensions**?: a string array of extensions
* **mimeType**?: a string array of mimetypes
* **maxSize**?: maximun size in megabytes per file.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
