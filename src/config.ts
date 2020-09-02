// client port = 3000
export const PORT = 3001;

export const BASE_URL =
	process.env.NODE_ENV === "production"
		? "http://3.35.51.159"
		: "http://localshot";
