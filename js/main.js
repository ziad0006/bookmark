var nameinput = document.getElementById("webname");
var urlinput = document.getElementById("weburl");

var mass = document.getElementById("massage");


var weblist = [];


function validname() {
    var regex = /^[A-Z][a-z]{3,9}$/

    if (regex.test(nameinput.value)) {
        return true
    }
    return false
}

function validurl() {
    var regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/+)*$/

    if (regex.test(urlinput.value)) {
        return true
    }
    return false
}



function addweb() {

    var check = checkname();
    if (check) {
        alert("this webside is founded")

    }
    else {

        if (validname() == true && validurl() == true) {
            var web = {
                nameweb: nameinput.value,
                url: urlinput.value,

            }

            weblist.push(web);


            localStorage.setItem("containerweb", JSON.stringify(weblist))

            displaydata();

            console.log(weblist);

            clearform();
        }
        else {
            mass.classList.remove("d-none")
        }

    }
}




function clearform() {
    nameinput.value = "";
    urlinput.value = "";

}


function displaydata() {
    var cartoona = "";


    for (var i = 0; i < weblist.length; i++) {
        cartoona += `
        <tr>
            <td>${i}</td>
            <td>${weblist[i].nameweb}</td>
            <td>
             <button onclick="visitfun(${i})" class="btn btn-visit text-white">
             <i class="fa-solid fa-eye pe-1"></i>
             Visit
             </button></td>
            <td>
              <button onclick="deleteitem(${i})" class="btn btn-delete text-white">
              <i class="fa-solid fa-trash-can pe-1"></i>
              Delete
              </button>
            </td>
          </tr>
        `
    }

    document.getElementById("contenttable").innerHTML = cartoona;
}



function deleteitem(index) {
    weblist.splice(index, 1)

    localStorage.setItem("containerweb", JSON.stringify(weblist))

    displaydata()
}


function visitfun(index) {

    window.open(weblist[index].url, '_blank')

}


function checkname() {
    var namee = nameinput.value;
    for (var i = 0; i < weblist.length; i++) {
        if (namee == weblist[i].name) {
            return true

        }
    }
    return false
}

function hidemassage() {
    mass.classList.add("d-none")

}