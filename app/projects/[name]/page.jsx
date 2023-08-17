import Video from "@/app/components/Video";
import Image from "next/image";
import Link from "next/link";

const fetchProject = async (name) => {
	const res = await fetch(`http://localhost:3000/api/projects	`);
	const data = await res.json();
	return data.find((d) => name.toLowerCase() === d.name.toLowerCase());
};

const ProjectPage = async ({ params }) => {
	const { name: projectName } = params;
	const project = await fetchProject(projectName);

	const { name, about, desc, video, awards, images, team, publishDate } =
		project;

	return (
		<section className="project-page">
			<Video src={video.src} poster={video.poster} />
			<div className="project__titles">
				<hgroup>
					<h1>{name}</h1>
					<h2>{desc}</h2>
					<h5 className="project__date">Published in {publishDate}</h5>
				</hgroup>
			</div>
			<div className="project__awards">
				<h3>recognitions</h3>
				{awards.map((award) => {
					return (
						<div key={award.title} className="award">
							<div className="award__img">
								<Image alt="" width={80} height={80} src={award.img} />
							</div>
							<div className="award__about">
								<h4>award</h4>
								<h5>{award.title}</h5>
							</div>
						</div>
					);
				})}
			</div>
			<div className="project__about">{about}</div>
			<div className="project__team">
				<h3>Team</h3>
				<div>
					{team.map((t) => {
						return (
							<Link key={t.url} href={t.url} className="team-item">
								<Image alt="" width={50} height={50} src={t.img} />
							</Link>
						);
					})}
				</div>
			</div>
			<div className="project__images">
				<Image alt="" width={900} height={900} src={images[0]} />
				<Image alt="" width={900} height={900} src={images[1]} />
			</div>
		</section>
	);
};

export default ProjectPage;
