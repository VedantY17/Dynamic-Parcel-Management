var addBeforeButton = document.getElementById("addbefore");
var addAfterButton = document.getElementById("addafter");
var removeButton = document.getElementById("remove");
var replaceButton = document.getElementById("replace");
var selectedItemDiv;

var click = document.getElementById("add");
click.addEventListener("click", function () {
  var div = document.createElement("div");

  var inputName = document.getElementById("parcelname").value;
  var inputLoc = document.querySelector("select").value;

  div.innerHTML = inputName;

  if (inputName == "") {
    alert("enter valid parcel name");
  } else {
    if (inputLoc == "Mumbai") {
      var m = document.querySelector(".mumparcel");
      m.append(div);
      div.classList.add("mum");
    } else if (inputLoc == "Delhi") {
      var d = document.querySelector(".delhparcel");
      d.append(div);
      div.classList.add("delh");
    } else if (inputLoc == "Kolkata") {
      var k = document.querySelector(".kolparcel");
      k.append(div);
      div.classList.add("kol");
    }
  }

  document.getElementById("parcelname").value = ""; // to reset the default name value
  document.querySelector("select").value = "Mumbai"; // to reset the default location value

  div.addEventListener("click", function () {
    if (selectedItemDiv !== div) {
      // Reset styles for the previously selected div (if any)
      if (selectedItemDiv) {
        selectedItemDiv.style.boxShadow = "none";
        selectedItemDiv.style.borderColor = "initial";
        selectedItemDiv.style.borderStyle = "none";
        selectedItemDiv.style.borderWidth = "0";
      }

      selectedItemDiv = div;

      if (selectedItemDiv.classList.contains("mum" || "mumparcel")) {
        document.querySelector("select").value = "Mumbai";
        document.querySelector("select").disabled = true;
      } else if (selectedItemDiv.classList.contains("delh" || "delhparcel")) {
        document.querySelector("select").value = "Delhi";
        document.querySelector("select").disabled = true;
      } else if (selectedItemDiv.classList.contains("kol" || "kolparcel")) {
        document.querySelector("select").value = "Kolkata";
        document.querySelector("select").disabled = true;
      }

      // Add styles to the selected div
      // selectedItemDiv.style.boxShadow = "0 0 5px 2px #888";
      selectedItemDiv.style.borderColor = "white"; // Changing the border color
      selectedItemDiv.style.borderStyle = "dashed"; // Adding a square border
      selectedItemDiv.style.borderWidth = "4px"; // Border width
      // selectedItemDiv.style.transition = "all 0.2s ease-in";
    }

    var buttons = document.querySelector(".buttons"); // to show the buttons
    buttons.style.display = "flex";

    var selecteditem = document.getElementById("selecteditem"); // to show the selected parcel name
    selecteditem.textContent = inputName;
  });
});

addBeforeButton.addEventListener("click", function () {
  if (selectedItemDiv) {
    var div = document.createElement("div");
    var inputName = document.getElementById("parcelname").value;
    var inputLoc = document.querySelector("select").value;

    div.innerHTML = inputName;

    if (inputName == "") {
      alert("Enter valid parcel name");
    } else {
      if (inputLoc == "Mumbai") {
        div.classList.add("mum");
      } else if (inputLoc == "Delhi") {
        div.classList.add("delh");
      } else if (inputLoc == "Kolkata") {
        div.classList.add("kol");
      }
    }

    // Insert the new div before the selected div
    selectedItemDiv.parentNode.insertBefore(div, selectedItemDiv);

    // Reset the #parcelname input field to blank
    document.getElementById("parcelname").value = "";
    // Reset the select location to "Mumbai"
    document.querySelector("select").value = "Mumbai";

    div.addEventListener("click", function () {
      if (selectedItemDiv !== div) {
        // Reset styles for the previously selected div (if any)
        if (selectedItemDiv) {
          selectedItemDiv.style.boxShadow = "none";
          selectedItemDiv.style.borderColor = "initial";
          selectedItemDiv.style.borderStyle = "none";
          selectedItemDiv.style.borderWidth = "0";
        }

        selectedItemDiv = div;

        if (selectedItemDiv.classList.contains("mum" || "mumparcel")) {
          document.querySelector("select").value = "Mumbai";
          document.querySelector("select").disabled = true;
        } else if (selectedItemDiv.classList.contains("delh" || "delhparcel")) {
          document.querySelector("select").value = "Delhi";
          document.querySelector("select").disabled = true;
        } else if (selectedItemDiv.classList.contains("kol" || "kolparcel")) {
          document.querySelector("select").value = "Kolkata";
          document.querySelector("select").disabled = true;
        }

        // Add styles to the selected div
        // selectedItemDiv.style.boxShadow = "0 0 5px 2px #888";
        selectedItemDiv.style.borderColor = "white"; // Changing the border color
        selectedItemDiv.style.borderStyle = "dashed"; // Adding a square border
        selectedItemDiv.style.borderWidth = "4px"; // Border width
        // selectedItemDiv.style.transition = "all 0.2s ease-in";
      }

      var selecteditem = document.getElementById("selecteditem"); // to show the selected parcel name
      selecteditem.textContent = inputName;
    });
  }
});

addAfterButton.addEventListener("click", function () {
  if (selectedItemDiv) {
    var div = document.createElement("div");
    var inputName = document.getElementById("parcelname").value;
    var inputLoc = document.querySelector("select").value;

    div.innerHTML = inputName;

    if (inputName === "") {
      alert("Enter valid parcel name");
    } else {
      if (inputLoc == "Mumbai") {
        div.classList.add("mum");
      } else if (inputLoc == "Delhi") {
        div.classList.add("delh");
      } else if (inputLoc == "Kolkata") {
        div.classList.add("kol");
      }
    }

    // Insert the new div after the selected div
    selectedItemDiv.parentNode.insertBefore(div, selectedItemDiv.nextSibling);

    // Reset the #parcelname input field to blank
    document.getElementById("parcelname").value = "";
    // Reset the select location to "Mumbai"
    document.querySelector("select").value = "Mumbai";

    div.addEventListener("click", function () {
      if (selectedItemDiv !== div) {
        // Reset styles for the previously selected div (if any)
        if (selectedItemDiv) {
          selectedItemDiv.style.boxShadow = "none";
          selectedItemDiv.style.borderColor = "initial";
          selectedItemDiv.style.borderStyle = "none";
          selectedItemDiv.style.borderWidth = "0";
        }

        selectedItemDiv = div;

        if (selectedItemDiv.classList.contains("mum" || "mumparcel")) {
          document.querySelector("select").value = "Mumbai";
          document.querySelector("select").disabled = true;
        } else if (selectedItemDiv.classList.contains("delh" || "delhparcel")) {
          document.querySelector("select").value = "Delhi";
          document.querySelector("select").disabled = true;
        } else if (selectedItemDiv.classList.contains("kol" || "kolparcel")) {
          document.querySelector("select").value = "Kolkata";
          document.querySelector("select").disabled = true;
        }

        // Add styles to the selected div
        // selectedItemDiv.style.boxShadow = "0 0 5px 2px #888";
        selectedItemDiv.style.borderColor = "white"; // Changing the border color
        selectedItemDiv.style.borderStyle = "dashed"; // Adding a square border
        selectedItemDiv.style.borderWidth = "4px"; // Border width
        // selectedItemDiv.style.transition = "all 0.2s ease-in";
      }

      var selecteditem = document.getElementById("selecteditem"); // to show the selected parcel name
      selecteditem.textContent = inputName;
    });
  }
});

removeButton.addEventListener("click", function () {
  if (selectedItemDiv) {
    selectedItemDiv.remove(); // Remove the selected div from the DOM
    selectedItemDiv = null; // Reset the selected div reference
    const selectedItem = document.getElementById("selecteditem");
    selectedItem.textContent = ""; // Reset the "Selected Parcel" section
  }
});

replaceButton.addEventListener("click", function () {
  var inputName = document.getElementById("parcelname").value;

  if (inputName === "") {
    alert("Enter valid parcel name");
    return;
  }

  if (selectedItemDiv) {
    selectedItemDiv.textContent = inputName;
    var selecteditem = document.getElementById("selecteditem");
    selecteditem.textContent = inputName;
  }

  document.getElementById("parcelname").value = ""; // Reset the default name value
});
