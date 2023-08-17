import { Suspense } from "react";
import Project from "../components/Project";
import ProjectsList from "../components/ProjectsList";
import Loader from "../loading";

export const metadata = {
	title: "Projects",
};

const ProjectsPage = () => {
	return (
		<div className="projects-page">
			<h1 className="projects-page__title">Projects</h1>
			<Suspense fallback={<Loader />}>
				<ProjectsList />
			</Suspense>
		</div>
	);
};

export default ProjectsPage;
