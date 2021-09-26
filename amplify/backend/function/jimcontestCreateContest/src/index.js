/* Amplify Params - DO NOT EDIT
	API_JIMCONTEST_GRAPHQLAPIENDPOINTOUTPUT
	API_JIMCONTEST_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const https = require("https");
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_JIMCONTEST_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const graphqlQuery = require("./query.js").mutation;
const apiKey = process.env.API_JIMCONTEST_GRAPHQLAPIKEYOUTPUT;

exports.handler = async (event) => {
  let responseMessage = "all failed!";
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const contestNo = `D${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
  const req = new AWS.HttpRequest(appsyncUrl, region);
  const item = {
    input: {
      contest_number: contestNo,
      contest_type: "daily",
      current_flag: 1,
      start_date: today.toISOString(),
      end_date: nextDay.toISOString(),
    },
  };

  req.method = "POST";
  req.path = "/graphql";
  req.headers.host = endpoint;
  req.headers["Content-Type"] = "application/json";
  req.body = JSON.stringify({
    query: graphqlQuery,
    operationName: "CreateContests",
    variables: item,
  });

  if (apiKey) {
    req.headers["x-api-key"] = apiKey;
  } else {
    const signer = new AWS.Signers.V4(req, "appsync", true);
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  }

  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      let data = "";

      result.on("data", (chunk) => {
        data += chunk;
      });

      result.on("end", () => {
        resolve(JSON.parse(data.toString()));
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });
  console.log(data);

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseMessage),
  };
  return response;
};
