var a = "https://github.com/TEST-ORG-TEST-123/TEST2";
let data = JSON.stringify({"title":"Master Branch Protection","body":"@djsmicks, We have automatically protected the master branched on this repository. We require 1 pull request review before merging to master. See and update @" + a + "/settings/branches"});
var b = "hello" + a;
console.log(data);
