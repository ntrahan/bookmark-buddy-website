const splide = new Splide(".splide", {
	pagination: false,
	type: "loop",
})
splide.mount()

const showcaseListItems = Array.from(document.querySelectorAll("#showcase-list li")),
	showcaseSelect = document.getElementById("showcase-select")

function displayShowcaseItemAsSelected(index) {
	showcaseListItems.forEach(f => {
		f.classList.remove("selected")
	})

	showcaseListItems[index].classList.add("selected")
	showcaseSelect.selectedIndex = index
}

splide.on("move", newIndex => displayShowcaseItemAsSelected(newIndex))

document.getElementById("showcase-list").addEventListener("click", e => {
	const index = showcaseListItems.indexOf(e.target)

	if (index >= 0) {
		splide.go(index)
		displayShowcaseItemAsSelected(index)
	}
})

showcaseSelect.addEventListener("change", e => {
	const index = showcaseSelect.selectedIndex

	splide.go(index)
	displayShowcaseItemAsSelected(index)
})
