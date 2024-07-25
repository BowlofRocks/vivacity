import express, {Express, Request, Response} from "express";
const port = 3000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("I hate you!");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("hi");
});

app.get("/awesome/applicant", (req: Request, res: Response) => {
  const funFacts = {
    name: "Paul Amago",
    funFact1: "I am learning how to do this code.",
    funFact2: "I love making fun applications that can help people.",
    funFact3: "I strive to learn and imporove my egineering skills."
  };
  res.json(funFacts);
});


app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
});
