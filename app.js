const img = document.getElementById("profile-image");
const input = document.getElementById("upload");

input.addEventListener("change", () => { 
    const file = input.files[0];
    if (file) {
        img.src = URL.createObjectURL(file);
    }
});
