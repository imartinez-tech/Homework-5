var saveButton = document.querySelector("#saveBtn")
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
// loop over divs by id and change the color of the textarea based on time of day

var save = function (saveButton) {
    saveButton.preventDefault(); 
    
    saveButton.addEventListener("click",function(saveButton) {
        saveButton.preventDefault();
        if (saveButton) {
            localStorage.setItem("save", saveButton);
        }
    })
};


