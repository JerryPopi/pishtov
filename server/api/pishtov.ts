import { useQuery } from 'h3';
import { IncomingMessage, ServerResponse } from 'http';

export default (req: IncomingMessage, res: ServerResponse) => {
	console.log('us')
	let id = useQuery(req).id;
	console.log(id)
	if (id) {
		return {
			id: 1,
			title: 'Pishtov 1',
			img: "https://picsum.photos/200/300",
			creator: "Pesho",
			stars: 5,
			color: '#a74aa1',
		};
	} else {
		return {};
	}
}