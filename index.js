const slider = document.getElementById("slider");
const price = document.getElementById("price");
const views = document.getElementById("views");
const toggle = document.getElementById("myToggle");
const month = document.getElementById("month");

document.addEventListener("input", (e) => {
	if (e.target === slider || e.target === toggle) {
		render();
	}
});

function render() {
	let sliderValue = slider.value;

	const values = {
		0: ["8", "10K pageviews"],
		25: ["12", "50K pageviews"],
		50: ["16", "100K pageviews"],
		75: ["24", "500k pageviews"],
		100: ["36", "1M pageviews"],
	};

	for (const value in values) {
		if (toggle.checked) {
			values[value][0] *= 0.75 * 12;
			month.textContent = "/ year";
		} else {
			month.textContent = "/ month";
		}

		if (value === sliderValue) {
			price.textContent = `$${values[value][0]}.00`;
			views.textContent = values[value][1];
		}
	}

	slider.style.background = `
	linear-gradient(
		to right,
		#a4f3eb 0%,
		#a4f3eb ${sliderValue}%,
		#ecf0fb 0%,
		#ecf0fb 100%
	)`;
}
