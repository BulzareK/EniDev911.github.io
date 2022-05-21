const relativePathImage = "../../assets/img/";
const relativePathMedia = "../../assets/media/"

// document.querySelector(".collapse.show").each(function () {
//     this.preventDefault(".card-header").select(".fas").classList.add("fa-code");
// });


const menu = document.getElementById("menu");

function showAvatar() {
    Swal.fire({
        title: "<h2 class='text-center'><code class='fs-1 text-center'><i class='fas fa-user-secret fs-1'></i> {EniDev911}</code></h2>",
        imageUrl: relativePathImage + "logo_sin_bg.png",
        imageWidth: "200px",
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: "<i class='fas fa-times'></i>",
        input: 'password',
        inputLabel: 'Password'
    })
}

function playSound(filename = relativePathMedia + "lofi-beat-chill") {
    /**
      * Plays a sound using the HTML5.
      * @param {string} filename The name of the file.!
      */
    var mp3Source = '<source src="' + filename + '.mp3" type="audio/mpeg">';
    var oggSource = '<source src="' + filename + '.ogg" type="audio/ogg">';
    var embedSource = '<embed hidden"true" autostart="true" loop="false" src="' + filename + '.mp3>"';
    document.getElementById("sound").innerHTML = '<audio autoplay="autoplay" controls>' + mp3Source + oggSource + embedSource + '</audio>';
}

function showTyped(e) {
    e.target.removeEventListener(e.type, showTyped);
    let arrString = ['EniDev911', "'Marco Antonio'", 31, "'Chile'", true]
    // Typed
    let typed = new Typed('.typed', {
        strings: [
            `<i class='coding-typed'><spam style='color: darkorange;'>${arrString[0]}</spam> = <spam style='color: #fa9;'>{<br>&nbsp;&nbsp;fullname:</spam> ${arrString[1]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>age:</spam> ${arrString[2]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>country:</spam> ${arrString[3]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>availability:</spam> <spam style='color: peru; font-style: italic;'>true</spam>,<br>&nbsp;&nbsp;<spam style='color: #fa9;'>profile:</spam> 'fullstack',<br>&nbsp;&nbsp;<spam style='color: #fa9;'>stack:</spam>[<br>&nbsp;&nbsp;&nbsp;&nbsp;'mern','mean', 'mevn'<br>&nbsp;&nbsp;&nbsp;&nbsp;'lamp', 'wamp', 'mamp'<br>&nbsp;&nbsp;]<spam style='color: #fa9;'>}</spam></i>`,
        ],
        typeSpeed: 50,
        startDelay: 340,
        backend: 75,
        backDelay: 1500,
        loopCount: 1,
        contentType: "html",
        cursorChar: "|",
        showCursor: true,
    });
}

document.getElementById("aboutMe").addEventListener("click", showTyped);


// dark-mode

// Enable popover bootstrap
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=""]'));
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverList);
});
// Enable tooltip bootstrap
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});