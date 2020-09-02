import app from "./app";
import { PORT, BASE_URL } from "./config";

app.listen(PORT, () => console.log(`listening on ${BASE_URL}:${PORT}`));
