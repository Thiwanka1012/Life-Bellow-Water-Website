// Function to apply selected font size, font style, and background color
function applyCustomization(fontSize, fontStyle, bgColor) {
    document.documentElement.style.setProperty('--font-size', fontSize + "px");
    document.documentElement.style.setProperty('--font-style', fontStyle);
    document.documentElement.style.setProperty('--bg-color', bgColor);
}

// Event listener for font size select input
document.getElementById("fontSizeSelect").addEventListener("change", function() {
    var selectedFontSize = this.value;
    var selectedFontStyle = document.getElementById("fontStyleSelect").value;
    var selectedBgColor = document.getElementById("bgColorPicker").value;
    applyCustomization(selectedFontSize, selectedFontStyle, selectedBgColor);
});

// Event listener for font style select input
document.getElementById("fontStyleSelect").addEventListener("change", function() {
    var selectedFontStyle = this.value;
    var selectedFontSize = document.getElementById("fontSizeSelect").value;
    var selectedBgColor = document.getElementById("bgColorPicker").value;
    applyCustomization(selectedFontSize, selectedFontStyle, selectedBgColor);
});

// Event listener for background color picker
document.getElementById("bgColorPicker").addEventListener("input", function() {
    var selectedBgColor = this.value;
    var selectedFontSize = document.getElementById("fontSizeSelect").value;
    var selectedFontStyle = document.getElementById("fontStyleSelect").value;
    applyCustomization(selectedFontSize, selectedFontStyle, selectedBgColor);
});




function toggle(event, popupId, imageUrl){
    event.preventDefault();

    var blur = document.querySelectorAll('.container');
    blur.forEach(function(element) {
        element.classList.toggle('active');
    });

    var popup = document.getElementById(popupId);
    var popupImage = popup.querySelector('img');
    popupImage.src = imageUrl;
    popup.classList.toggle('active');
}


    
