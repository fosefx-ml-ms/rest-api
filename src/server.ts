import {app} from "./app";

const PORT = 8080;

app.listen(PORT, () => {
    console.info("Server running and listening of port " + PORT);
});
