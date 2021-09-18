import "./style.css"

const Card = ({ ownerImg, description, fullName }) => {


	return (
		<section id="card">
			<img
				src={ownerImg}
				alt={fullName}
				className="logo-repo" />
			<div className="text">
				<p className="name-repo">{fullName}</p>
				<article className="description-repo">{description}</article>
			</div>
		</section>
	)
}

export default Card