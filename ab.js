const fetch = require('node-fetch');
var posts;
var url = "https://api.github.com/repos/TEST-ORG-TEST-123/tmp/branches/master/protection";
var headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer 9a56903019ba817075643a8108518e279d5afb79",
  "Accept": "application/vnd.github.luke-cage-preview+json"
};
var data = JSON.stringify({"required_status_checks":null,"enforce_admins":null,"required_pull_request_reviews":{"dismissal_restrictions":{},"dismiss_stale_reviews":false,"require_code_owner_reviews":false,"required_approving_review_count":1},"restrictions":null});
fetch(url, { method: 'PUT', headers: headers, body: data})
  .then((res) => {
    return res.json()
}).then((json) => {
  console.log(json);
  posts = json;
  let url = "https://api.github.com/repos/TEST-ORG-TEST-123/tmp/issues";
  let headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer 9a56903019ba817075643a8108518e279d5afb79"
  };
  let data = JSON.stringify({"title":"Master Branch Protection","body":"@djsmicks, We have automatically protected the master branched on this repository. We require 1 pull request review before merging to master. See and update @ /settings/branches"});
  return fetch(url, { method: 'POST', headers: headers, body: data});
}).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
  users = data;
}).catch((error) => {
  console.log(error);
});

// var data = {
//   "required_status_checks": null,
//   "enforce_admins": null,
//   "required_pull_request_reviews": {
//     "dismissal_restrictions":{
//     },
//     "dismiss_stale_reviews":false,
//     "require_code_owner_reviews":false,
//     "required_approving_review_count":1
//   },
//   "restrictions":null
// };
