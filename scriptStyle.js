

window.addEventListener("resize", adjustFooterMargin);

function adjustFooterMargin()
{
    let width = window.innerWidth;
	let footer = document.getElementById("idFooter")
    let factor = 17.46;

    let result = width / factor;
    //footerText.style.left = result.toString() + 'px';

    footer.style.left = result.toString() + '%'

}

adjustFooterMargin();
