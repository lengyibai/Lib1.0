/* eslint-disable */
class eeSourceBtn {
  constructor(quill, options) {
    let theClass = this;
    theClass.addDom(quill);
    quill.on("text-change", (delta, oldDelta, source) => {
      theClass.replaceSourceEditorContent(quill);
    });

    //create btn
    let button = document.createElement("div");
    //display button text
    button.innerHTML = "html";
    button.style.cssText = `
    color: #444;
    height: fit-content;
    font-weight: bold;
    cursor: pointer;
    `;
    button.onclick = function () {
      theClass.showSourceEditor(quill);
    };

    //create btn container
    let buttonContainer = document.createElement("span");
    buttonContainer.setAttribute("class", "ql-formats ee-flag-source");
    buttonContainer.appendChild(button);
    //add to toolbar
    quill.container.previousSibling.appendChild(buttonContainer);
  }
  //add dom for source editor
  addDom(quill) {
    if (!quill.container.querySelector(".ql-ee-source")) {
      var txtArea = document.createElement("textarea");
      txtArea.classList.add("htmlEditor");
      txtArea.style.cssText =
        "width: 100%;margin: 0px;background: rgb(249, 249, 249);box-sizing: none;font-size: 13px;outline: none;padding: 12px 15px;line-height: 1.42;font-family: Consolas, Menlo, Monaco, &quot;Courier New&quot;, monospace;position: absolute;top: 0;bottom: 0;border: none;";

      var htmlEditor = quill.addContainer("ql-ee-source");
      htmlEditor.style.cssText = "display:none";
      htmlEditor.appendChild(txtArea);
    }
  }

  //for quill editor switch
  replaceSourceEditorContent(quill) {
    let quillEditor = quill.container.querySelector(".ql-editor");
    let sourceContainer = quill.container.querySelector(".ql-ee-source");
    let sourceEditor = sourceContainer.querySelector("textarea");
    sourceEditor.value = quillEditor.innerHTML;
  }

  //add html DOM, show/hide, save event
  showSourceEditor(quill) {
    //1. find quill editor
    let quillEditor = quill.container.querySelector(".ql-editor");
    let sourceContainer = quill.container.querySelector(".ql-ee-source");
    let sourceEditor = sourceContainer.querySelector("textarea");
    //show/hide editor, value transfer
    if (sourceContainer.style.display === "none") {
      //show source editor
      sourceContainer.style.display = "";
      sourceEditor.value = quillEditor.innerHTML;
    } else {
      //hidden source ditor
      sourceContainer.style.display = "none";
      //set source content to quill editor
      quillEditor.innerHTML = sourceEditor.value;
    }
  }
}

window.eeSourceBtn = eeSourceBtn;
export default eeSourceBtn;
export { eeSourceBtn };
