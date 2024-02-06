

window.addEventListener("resize", adjustFooterMargin);

function adjustFooterMargin()
{
    let width = window.innerWidth;
	let footer = document.getElementById("idFooter")
    let factor = 17.46;

    //let result = width / factor;
    let result = 0.02252 * width + 35.48;

    footer.style.left = result.toString() + '%';
    footer.style.transform = "translate(-" + (result).toString() + "%,-50%)";
}

adjustFooterMargin();
