import React from "react";
import Project from "./Project";

const fetchProjects = async () => {
	const res = await fetch("http://localhost:3000/api/projects");
	await new Promise((res) => setTimeout(res, 2000));
	const data = await res.json();
	return data;
};

const ProjectsList = async () => {
	const projects = await fetchProjects();
	return (
		<div>
			{projects.map((data) => (
				<Project key={data.name} data={data} />
			))}
		</div>
	);
};

export default ProjectsList;
