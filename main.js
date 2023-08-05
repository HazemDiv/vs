const codeEditor = document.getElementById('codeEditor');
const runButton = document.getElementById('runButton');
const resetButton = document.getElementById('resetButton');
const outputFrame = document.getElementById('outputFrame');
function runCode() {
    const code = codeEditor.value;
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(code);
    outputFrame.contentDocument.close();
}
function resetCode() {
    codeEditor.value = '';
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write('');
    outputFrame.contentDocument.close();
}
runButton.addEventListener('click', runCode);
resetButton.addEventListener('click', resetCode);
const textText = `<html>
<head>
<meta charset="UTF-8">
</head>
<body>

</body>
</html>`;
const copyHTMLButton = document.getElementById('copyHTMLButton');
copyHTMLButton.addEventListener('click', function () {
    const textToCopy = textText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
});
function hideDiv() {
    var div = document.getElementById("overflow-js");
    div.style.display = "none";
}
const myButton = document.getElementById("myButton");
const myList = document.getElementById("Nav-List");
myButton.addEventListener("click", function () {
    if (myList.style.height === "0px") {
        const listHeight = myList.scrollHeight;
        myList.style.height = listHeight + "px";
    } else {
        myList.style.height = "0px";
    }
});