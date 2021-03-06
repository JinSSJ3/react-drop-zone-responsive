'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var decArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var hexTodec = function (letter) {
    return decArray[hexArray.indexOf(letter)];
};
var hexColorToRGB = function (colorInput, perc) {
    if (colorInput.includes("rgba")) {
        return colorInput;
    }
    if (colorInput.includes("rgb")) {
        return colorInput.replace(')', ", " + perc + ")");
    }
    var resultDefault = "rgba(255, 255, 255, 0.6)";
    if (!colorInput) {
        return resultDefault;
    }
    var color = colorInput.toUpperCase();
    var resultOk = "";
    var component1 = 0;
    var component2 = 0;
    var component3 = 0;
    // if first element is no '#' return default background color
    if (color.charAt(0) !== '#') {
        return resultDefault;
    }
    // if color lenght is not exactly 7 return default
    if (color.length !== 7) {
        return resultDefault;
    }
    // if one of the letters is not included in hex array return  default
    for (var i = 1; i < color.length; i++) {
        if (!hexArray.includes(color.charAt(i))) {
            return resultDefault;
        }
    }
    component1 = hexTodec(color.charAt(1)) * 16 + hexTodec(color.charAt(2));
    component2 = hexTodec(color.charAt(3)) * 16 + hexTodec(color.charAt(4));
    component3 = hexTodec(color.charAt(5)) * 16 + hexTodec(color.charAt(6));
    resultOk = "rgba(" + component1 + ", " + component2 + "," + component3 + " , " + perc + ")";
    return resultOk;
};

___$insertStyle(".Jbutton-outlined:hover {\n  background-color: #ffe1d6;\n}");

var buttonStyles = function (style) {
    var bg_color = undefined;
    if (style === null || style === void 0 ? void 0 : style.backgroundColor) {
        bg_color = style.backgroundColor;
    }
    return {
        minWidth: "64px",
        padding: "6px 16px",
        borderRadius: "5px",
        // border: "none",
        //color: "white",
        textAlign: "center",
        textDecoration: "none",
        lineHeight: "1.75",
        display: "flex",
        fontSize: "0.875rem",
        margin: "1%",
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        //transition-duration: 0.4s;
        cursor: "pointer",
        fontWeight: 500,
        backgroundColor: "" + ((style === null || style === void 0 ? void 0 : style.backgroundColor) ? hexColorToRGB(style.backgroundColor, 0.8)
            : "rgba(255, 255, 255, 0.8)"),
        color: (style === null || style === void 0 ? void 0 : style.themeColor) || "#ff6c37",
        border: "1.5px solid " + ((style === null || style === void 0 ? void 0 : style.themeColor) || "#ff6c37"),
        textTransform: "uppercase",
    };
};
var JButton = function (props) {
    var children = props.children, onClick = props.onClick, style = props.style;
    var handleClick = function () {
        if (onClick)
            onClick();
    };
    return (React__default['default'].createElement("button", { className: "Jbutton-outlined", style: buttonStyles(style), onClick: handleClick }, children));
};

___$insertStyle(".dz-container {\n  background-color: white;\n  padding: 1.5%;\n  margin: 0;\n  border-radius: 6px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.dz {\n  border: 2px dashed #ff6c37;\n  border-radius: 2%;\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(\"https://www.postman.com/assets/use-cases-by-role.svg\");\n  width: 100%;\n  padding: 1%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-size: inherit;\n}\n\n.dz-content {\n  color: black;\n  font-size: calc(0.3rem + 0.5vmin);\n  font-weight: normal;\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 20vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.dz-content h2 {\n  font-size: calc(0.5rem + 0.8vmin);\n  font-weight: lighter;\n}");

var makeLabels = function (localization) {
    switch (localization) {
        case "es-ES":
            return {
                mainLabel: "Suelta tus archivos aquí",
                mainLabel_or: "o",
                bottonLabel: "Extensiones permitidas:",
                buttonLabel: "Busca tus archivos...",
            };
        case "en-EN":
            return {
                mainLabel: "Drop your file here",
                mainLabel_or: "or",
                bottonLabel: "Extensions allowed:",
                buttonLabel: "Select your files...",
            };
        default:
            //  "en-EN"
            return {
                mainLabel: "Drop your file here",
                mainLabel_or: "or",
                bottonLabel: "Extensions allowed:",
                buttonLabel: "Select your files...",
            };
    }
};
var makeErrors = function (localization) {
    switch (localization) {
        case "es-ES":
            return {
                mime: "Tipo de archivo no permitido",
                ext: "Extensión de archivo no permitida",
                size: "Tamaño maximo exedido",
            };
        default:
            //  "en-EN"
            return {
                mime: "Mime type not allowed",
                ext: "File extension not allowed",
                size: "Max file size exceeded",
            };
    }
};
var makeDropZoneStyles = function (style) {
    return {
        border: "2px dashed " + ((style === null || style === void 0 ? void 0 : style.themeColor) || "#ff6c37"),
        borderRadius: "2%",
        backgroundImage: "linear-gradient(\n      to top,\n      " + ((style === null || style === void 0 ? void 0 : style.backgroundColor) ? hexColorToRGB(style.backgroundColor, 0.6) : "rgba(255, 255, 255, 0.6)") + ",\n      " + ((style === null || style === void 0 ? void 0 : style.backgroundColor) ? hexColorToRGB(style.backgroundColor, 0.6) : "rgba(255, 255, 255, 0.6)") + "\n    ),\n    url(" + ((style === null || style === void 0 ? void 0 : style.backgroundImage) ||
            "https://www.postman.com/assets/use-cases-by-role.svg") + ")",
        width: "100%",
        padding: "1%",
    };
};
var makeTextStyles = function (style) {
    if (!style) {
        return undefined;
    }
    return {
        fontFamily: style.fontFamily,
        color: style.color,
        fontSize: style.fontSize,
    };
};
var DropZone = function (props) {
    var style = props.style, limits = props.limits, amountOfFiles = props.amountOfFiles, localization = props.localization;
    var input_ref = React.useRef(null);
    var dz_ref = React.useRef(null);
    var handleDragOver = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "link"; // Explicitly show this is a copy.
    };
    var getExt = function (fileName) {
        var re = /(?:\.([^.]+))?$/;
        return re.exec(fileName)[1];
    };
    var resultOfValidation = function (fileList) {
        var errorsEncountered = makeErrors(localization);
        var result = [];
        fileList.forEach(function (f) {
            result.push({ file: f, errors: [] });
        });
        if (limits) {
            result.forEach(function (res) {
                var file = res.file;
                //console.log("type: ", file.type);
                if (limits.mimeType) {
                    if (!limits.mimeType.includes(file.type)) {
                        res.errors = __spreadArrays(res.errors, [errorsEncountered.mime]);
                    }
                }
                var ext = getExt(file.name) || "";
                if (limits.extensions) {
                    if (!limits.extensions.includes(ext)) {
                        res.errors = __spreadArrays(res.errors, [errorsEncountered.ext]);
                    }
                }
                if (limits.maxSize) {
                    if (limits.maxSize > file.size * 1024 * 1024) {
                        res.errors = __spreadArrays(res.errors, [errorsEncountered.size]);
                    }
                }
            });
        }
        return result;
    };
    var handleFileSelect = function (evt) { return __awaiter(void 0, void 0, void 0, function () {
        var maxAmountOfFiles, files, output, fileListSize, i, i, f, finalList;
        return __generator(this, function (_a) {
            evt.stopPropagation();
            evt.preventDefault();
            maxAmountOfFiles = amountOfFiles || 10;
            maxAmountOfFiles = maxAmountOfFiles <= 0 ? 1 : maxAmountOfFiles;
            files = [];
            if (!evt.dataTransfer) {
                //se clickeo al boton
                //console.log("Caraga por input");
                files = evt.target.files;
                //console.log("primer file", evt.target.files[0]);
            }
            else {
                //se uso el DropZone
                // console.log("Caraga por dropZone", evt.dataTransfer.files);
                files = evt.dataTransfer.files;
            }
            output = [];
            if (maxAmountOfFiles) {
                fileListSize = files.length;
                for (i = 0; i < Math.min(maxAmountOfFiles, fileListSize); i++) {
                    output.push(files[i]);
                }
            }
            else {
                //si no hay limite
                for (i = 0, f = void 0; (f = files[i]); i++) {
                    output.push(f);
                }
            }
            finalList = resultOfValidation(output);
            if (props.handleFileSelect)
                props.handleFileSelect(finalList);
            return [2 /*return*/];
        });
    }); };
    var dz_handleClick = function () {
        //alert("click");
        input_ref.current.click();
    };
    var init = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //console.log("init");
            dz_ref.current.addEventListener("dragover", handleDragOver, false);
            dz_ref.current.addEventListener("drop", handleFileSelect, false);
            return [2 /*return*/];
        });
    }); };
    var renderListOfExtensions = function (listExt) {
        if (!listExt) {
            return "";
        }
        var size = listExt.length;
        switch (size) {
            case 0:
                return "";
            case 1:
                return "" + listExt[0];
            default: {
                var listExtensions = " ." + listExt[0];
                for (var i = 1; i < listExt.length; i++) {
                    listExtensions += ", ." + listExt[i];
                }
                return listExtensions;
            }
        }
    };
    var listOfExtensionsShow = renderListOfExtensions(limits === null || limits === void 0 ? void 0 : limits.extensions);
    var _labels = localization ? makeLabels(localization) : makeLabels("en-EN");
    React.useEffect(function () {
        init();
    });
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("div", { className: "dz-container", style: { backgroundColor: ((style === null || style === void 0 ? void 0 : style.backgroundColor) ? style.backgroundColor : "white") } },
            React__default['default'].createElement("div", { className: "dz", ref: dz_ref, style: makeDropZoneStyles(style) },
                React__default['default'].createElement("div", { className: "dz-content" },
                    React__default['default'].createElement("h1", { style: makeTextStyles(style === null || style === void 0 ? void 0 : style.mainTextStyle) }, "" + _labels.mainLabel),
                    React__default['default'].createElement("h1", { style: makeTextStyles(style === null || style === void 0 ? void 0 : style.mainTextStyle) }, "" + _labels.mainLabel_or),
                    React__default['default'].createElement(JButton, { style: style || undefined, onClick: dz_handleClick }, "" + _labels.buttonLabel),
                    listOfExtensionsShow && listOfExtensionsShow.length > 0 ? (React__default['default'].createElement("h2", { style: makeTextStyles(style === null || style === void 0 ? void 0 : style.bottonTextStyle) }, "" + _labels.bottonLabel,
                        React__default['default'].createElement("strong", null, " " + listOfExtensionsShow))) : (React__default['default'].createElement(React__default['default'].Fragment, null))))),
        React__default['default'].createElement("input", { ref: input_ref, type: "file", id: "inputSSJ", style: { display: "none" }, onChange: handleFileSelect, multiple: true })));
};

exports.DropZone = DropZone;
//# sourceMappingURL=index.js.map
