const htmlColors = [
"red", "blue", "green", "yellow", "orange", "purple", "pink",
"cyan", "magenta", "lime", "teal", "gold", "silver", "brown",
"coral", "khaki", "indigo", "salmon", "plum", "navy", "maroon"
];
const container = document.getElementById("colorContainer");
htmlColors.forEach(color => {
const box = document.createElement("div");
box.className = "color-box";
const preview = document.createElement("div");
preview.className = "color-preview";
preview.style.backgroundColor = color;
const name = document.createElement("p");
name.className = "color-name";
name.textContent = color;
box.appendChild(preview);
box.appendChild(name);
container.appendChild(box);
});

