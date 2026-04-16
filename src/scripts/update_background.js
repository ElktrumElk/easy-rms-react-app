

export default function UpdateBackkgroundColor(colorMode) {

    if (colorMode === "dark") {

        document.body.style.backgroundColor = "#080808";

        console.log(colorMode)
    } else {
        document.body.style.backgroundColor = "#f5f5f5";
    }
}