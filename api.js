const fetch = require('node-fetch');

var url = "https://api.github.com/repos/TEST-ORG-TEST-123/tmp/branches/master/protection";
var headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer 9a56903019ba817075643a8108518e279d5afb79",
  "Accept": "application/vnd.github.luke-cage-preview+json"
}
var data = JSON.stringify({"required_status_checks":null,"enforce_admins":null,"required_pull_request_reviews":{"dismissal_restrictions":{},"dismiss_stale_reviews":false,"require_code_owner_reviews":false,"required_approving_review_count":1},"restrictions":null});

const get_data = async url => {
  try {
    const response = await fetch(url, { method: 'PUT', headers: headers, body: data});
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

get_data(url);






// var options = {
//   'method': 'PUT',
//   'url': 'https://api.github.com/repos/TEST-ORG-TEST-123/tmp/branches/master/protection',
//   'headers': {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer 9a56903019ba817075643a8108518e279d5afb79',
//     'Accept': 'application/vnd.github.luke-cage-preview+json'
//   },
//   body: JSON.stringify({"required_status_checks":null,"enforce_admins":null,"required_pull_request_reviews":{"dismissal_restrictions":{},"dismiss_stale_reviews":false,"require_code_owner_reviews":false,"required_approving_review_count":1},"restrictions":null})
//
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
//   console.log(response.statusCode);
// });
