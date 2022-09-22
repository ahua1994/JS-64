const dob = document.querySelector("#birth");
let today = new Date().toJSON().split(".")[0];
dob.max = today;

let units = [31536000, 2628000, 86400, 3600, 60, 1];

let unitText = document.getElementsByClassName("unit");

dob.addEventListener("change", updateTime);

function updateTime() {
    document.body.style.backgroundImage =
        "url('https://www.teahub.io/photos/full/184-1843892_dark-space-wallpaper-hd.jpg')";

    setInterval(() => {
        let birth = document.querySelector("#birth");
        let time = (new Date() - new Date(birth.value)) / 1000;
        for (let i = 0; i < unitText.length; i++) {
            let unit = Math.floor(time / units[i]);
            unitText[i].innerHTML = unit > 9 ? unit : "0" + unit;
            time -= units[i] * unit;
        }
    }, 1000);
}
