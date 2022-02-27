import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import resume from "../assets/resume.pdf";
import smallProjects from "./smallProjects.js";

export default function initApp() {
  initSr();
  initTilt();
  smallProjects();
  // comment this if you don't want to attach your resume
  addResume(resume);
}
