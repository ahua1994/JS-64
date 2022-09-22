const dob = document.querySelector("#birth");
let today = new Date().toJSON().split(".")[0];
dob.max = today;

let unitText = document.getElementsByClassName("unit");

dob.addEventListener("change", updateTime);
console.log(unitText);

function updateTime() {
    document.body.style.backgroundImage =
        "url('https://www.teahub.io/photos/full/184-1843892_dark-space-wallpaper-hd.jpg')";

    setInterval(() => {
        let birth = document.querySelector("#birth");
        let now = new Date();
        let time = new Date(now - new Date(birth.value));
        unitText[0].innerHTML = `${time.getFullYear() - 1970}`.padStart(2, "0");
        unitText[1].innerHTML = `${time.getMonth()}`.padStart(2, "0");
        unitText[2].innerHTML = `${time.getDate()}`.padStart(2, "0");
        unitText[3].innerHTML = `${time.getHours()}`.padStart(2, "0");
        unitText[4].innerHTML = `${time.getMinutes()}`.padStart(2, "0");
        unitText[5].innerHTML = `${time.getSeconds()}`.padStart(2, "0");
    }, 1000);
}
