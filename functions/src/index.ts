import * as functions from "firebase-functions";
import * as corsModule from "cors";
import * as express from "express";
import * as bodyParser from "body-parser";
const router = require("express-promise-router")();

const moment = require("moment");

const availableDomains = [
  "rt.com",
  "bbc.com",
  "cnn.com",
  "elpais.com",
  "elconfidencial.com",
  "hipertextual.com",
];

const from = moment().subtract(5, "days").format("YYYY-MM-DD");
const to = moment().format("YYYY-MM-DD");

const fetchNews = (page) => {
  const query = `http://newsapi.org/v2/everything?q=coronavirus,covid-19&domains=${availableDomains.join(
    ","
  )}&language=es&from=${from}&to=${to}&sortBy=relevancy&page=${page}&apiKey=d4d3ee5383114b64b136c1ab66c778ee`;

  return new Promise((resolve, reject) => {
    fetch(query, { method: "get" })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const getNews = () => async (req, res, next) => {
  const { page } = req.params;
  const news = await fetchNews(page);
  res.status(200).json(news);
};

router.get("/:page", getNews);

const cors = corsModule({ origin: true });

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use("/news/v1", router);

exports.newsApi = functions.https.onRequest(app);
