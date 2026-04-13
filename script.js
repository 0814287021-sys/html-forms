console.log("script started")

function processform(event) {
    console.log("click");
    event.preventDefault();

    let finalinput = document.getElementById("firstname");
    let firstname = fnameinput.value;
    console.log(firstname);

    let dateinput = document.getElementById("birthdate");
    let birthdate = dateinput.value;
    console.log(birtdate);
}