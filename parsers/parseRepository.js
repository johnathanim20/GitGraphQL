class parseRepository {
    
	constructor(response) {
		this.setRepository(response);
	}

	setRepository(response) {
		this.name = response.data.user.repositories.nodes;
    }
}
exports.parseRepository = parseRepository;

			