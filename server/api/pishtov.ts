import { useQuery } from 'h3';
import { IncomingMessage, ServerResponse } from 'http';
import { readFileSync } from 'fs';

export default (req: IncomingMessage, res: ServerResponse) => {
	const id = useQuery(req).id.toString();
    // console.log("🚀 ~ file: pishtov.ts ~ line 7 ~ id", id)
	if (id) {
		// TODO tuka bi trqlo da zima ot databasata
		return {
			id: 1,
			title: 'Pishtov 1',
			img: "https://picsum.photos/200/300",
			creator: "Pesho",
			date: "18-02-2022",
			stars: 5,
			color: '#a74aa1',
			md: getPishtov(id)
		};
	} else {
		return {};
	}
}

function getPishtov(id: string) {
	try {
		let fileContent =  readFileSync(`server/api/pishtovs/${id}.md`, 'utf8');
		return fileContent;	
	} catch (e) {
		return;
	}
}