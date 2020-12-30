// Import dependancies
import Embed from '../Embed';

// Export custom embed from Embed, with red color for errors
class ErrorEmbed extends Embed {
	constructor() {
		super(13369344); // Red color
		this.setTitle('An error has occured');
	}
}

export default ErrorEmbed;
