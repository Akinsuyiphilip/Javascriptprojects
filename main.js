const textarea = document.querySelector("textarea"),
    FileNameInput = document.querySelector(".file-name input"),
    selectMenu = document.querySelector(".save-as select"),
    saveBtn = document.querySelector(".save-btn");


window.onload = () => {

    // To make texarea cleared on load
    textarea.value = "";




    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;

    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]}`



    saveBtn.addEventListener('click', () => {
        const blob = new Blob([textarea.value], {
            type: selectMenu.value
        });
        // Url.createObjectURL create a url that represent a passed object
        const fileUrl = URL.createObjectURL(blob);
        const Link = document.createElement("a"); // creating a tag
        Link.download = FileNameInput.value; //passing file name download value of link
        Link.href = fileUrl; // passing fileurl  as href of link
        Link.click();
    })


}