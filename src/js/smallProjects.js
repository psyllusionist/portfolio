export default function smallProjects() {
	const backBtn = document.getElementById('back-btn');
	const openBtn = document.getElementById('open-mini-btn');
	const openImg = document.getElementById('open-mini-img');
	const miniProjects = document.getElementById('mini-projects');
	const overlay = document.querySelector('.overlay');
	const html = document.getElementsByTagName('html')[0];
	const body = document.getElementsByTagName('body')[0];

	// Open Mini Projects Page
	const openMiniProjects = () => {
		html.style.overflowY = "hidden";
		body.style.overflowY = "hidden";
		overlay.classList.add('overlay-slide-right');
		overlay.classList.remove('overlay-slide-left');
	}

	// Close Mini Projects Page
	const closeMiniProjects = () => {
		html.style.overflowY = "scroll";
		body.style.overflowY = "scroll";
		overlay.classList.remove('overlay-slide-right');
		overlay.classList.add('overlay-slide-left');
	}

	// Unhide overflow when the page is loaded
	const unhide = () => {
		overlay.hidden = false;
		console.log('its')
	}

		//Check if the page href links to smaller projects
	const checkLink = () => {
		if(window.location.href.includes("js-projects")) {
			openMiniProjects();
		};
	}

	// Event Listeners
	openBtn.addEventListener('click', openMiniProjects);
	openImg.addEventListener('click', openMiniProjects);
	backBtn.addEventListener('click', closeMiniProjects);

	// On Load
	unhide();
	checkLink();
}