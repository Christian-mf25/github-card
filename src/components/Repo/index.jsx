import Card from "../Card"

const Repo = ({ searchInput, noneRepo }) => {

	const fullName = searchInput.full_name
	const description = searchInput.description
	const ownerImg = searchInput.name && searchInput.owner.avatar_url

	return (

		<>
			<p>
				{searchInput.name ? (
					<Card
					fullName={fullName}
					description={description}
					ownerImg={ownerImg} />
				):(
					noneRepo && <p>Repositório não encontrado</p>
				)}
			</p>
		</>
	)
}

export default Repo