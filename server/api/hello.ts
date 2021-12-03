import { useQuery } from 'h3'
import { IncomingMessage, ServerResponse } from 'http';

export default (req: IncomingMessage, res: ServerResponse) => {
	let query = useQuery(req)
	if (query.s == "nigga") {
		return "cock"
	}
	return "hello world"
}