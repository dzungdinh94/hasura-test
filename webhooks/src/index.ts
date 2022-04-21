import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 8989;
app.use(bodyParser.json());

app.post("/handle-event", (req: Request, res: Response) => {
  const event = req.body.event;
  if (event) {
    const description = `${event.session_variables['x-hasura-role']} has ${event.op} data at ${req.body.created_at}. The id of result is ${event.data.new.id}`
    const query = JSON.stringify({
        query: `mutation {insert_audit_one(object:{description:"${description}",id:"${uuidv4()}"}) { id }}`
      });
    fetch("http://hasura:8080/v1/graphql", {
      method: "POST",
      body: query,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((body) =>  res.status(200).end("success"))
      .catch((error) =>  res.status(500).end("error"));
  }else {
    res.status(500).end()
  }
});

app.on("error", (err) => {
  console.log("server error", err);
});
app.listen(port, () => {
  console.log("webhook server is listening on port", port);
});
module.exports = app