// copy fetch request from your account
fetch(
  "https://i.instagram.com/api/v1/friendships/<__some_id__>/followers/",
  {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
    },
    referrer: "https://www.instagram.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include"
  }
)
  .then((res) => res.json())
  .then((res) => {
    let newFollowers = res.users.map((item) => item.username);
    console.log(newFollowers)
    findDiff(newFollowers);
  });

var prevFollowers = []; // save your prev followers localy

function findDiff(newFollowers) {
  let array3 = prevFollowers.filter(function (obj) {
    if (newFollowers.indexOf(obj) == -1) return true;
    return false;
  });
  let array4 = newFollowers.filter(function (obj) {
    if (prevFollowers.indexOf(obj) == -1) return true;
    return false;
  });
    
  console.log({ removed: array3 }, { added: array4 });
}
