import type { NextApiRequest, NextApiResponse } from 'next'
import { createConnection, escape } from 'mysql2';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const fname = escape(String(req.body['fname']));
	const lname = escape(String(req.body['lname']));
	const phone = escape(String(req.body['phone']));
	const email = escape(String(req.body['email']));
	const content = escape(String(req.body['content']));
	
	try {
		const con = createConnection({
			'host':process.env.MYSQL_HOST,
			'user':process.env.MYSQL_USER,
			'password':process.env.MYSQL_PASS,
			'database':process.env.MYSQL_DB,
		})
	
		con.connect(async (err) => {
			if (err) throw err;
			
			const sql = `INSERT INTO submissions 
						(
							first_name, 
							last_name, 
							email, 
							number, 
							content
						) VALUES ('?','?','?','?','?')`; 
			
			const status = await con.execute(sql, [fname, lname, phone, email, content]);
			console.log(status);
			res.status(200).json({ status: status });
		});

	} catch (error) {
		res.status(500).json({'error':error});
	}

}
