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
		html.style.overflow = "hidden";
		body.style.overflow = "hidden";
		overlay.classList.add('overlay-slide-right');
		overlay.classList.remove('overlay-slide-left');
	}

	// Close Mini Projects Page
	const closeMiniProjects = () => {
		html.style.overflow = "scroll";
		body.style.overflow = "scroll";
		overlay.classList.remove('overlay-slide-right');
		overlay.classList.add('overlay-slide-left');
	}

	// Event Listeners
	openBtn.addEventListener('click', openMiniProjects);
	openImg.addEventListener('click', openMiniProjects);
	backBtn.addEventListener('click', closeMiniProjects);
}