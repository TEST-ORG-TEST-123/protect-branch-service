const express = require("express");
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const token = process.env.TOKEN;
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post("/", (req, res, next) => {


  const owner = req.body.repository.owner.login; //from request body
  const repo  = req.body.repository.name;


  var url = "https://api.github.com/repos/" + owner + "/" + repo + "/branches/master/protection";
  var headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token,
    "Accept": "application/vnd.github.luke-cage-preview+json"
  };
  var data = JSON.stringify({"required_status_checks":null,"enforce_admins":null,"required_pull_request_reviews":{"dismissal_restrictions":{},"dismiss_stale_reviews":false,"require_code_owner_reviews":false,"required_approving_review_count":1},"restrictions":null});
  fetch(url, { method: 'PUT', headers: headers, body: data})
    .then((res) => {
      return res.json()
  }).then((json) => {
    console.log(json); // log first api response
    let url = "https://api.github.com/repos/" + owner + "/" + repo + "/issues";
    let headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    };
    let data = JSON.stringify({"title":"Master Branch Protection","body":"@djsmicks, We have automatically protected the master branched on this repository. We require 1 pull request review before merging to master. See and update @ " + req.body.repository.html_url + "/settings/branches"});
    return fetch(url, { method: 'POST', headers: headers, body: data});
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data); //log second api response
    res.send("Successfully Protected Mater Branch and Posted Issue");
  }).catch((error) => {
    console.log(error);
    res.send("Internal Error");
  });

}); //end of post

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
