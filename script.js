// Save previous followers
var prevFollowers = [];

// Copy fetch request from your account (Dev tools > network)
fetch("https://i.instagram.com/api/v1/friendships/<____>/followers", {
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
  credentials: "include",
})
  .then((res) => res.json())
  .then((res) => {
    let followers = res.users.map((item) => item.username);
    console.log({ followers });
    findDiff(followers);
  });

function findDiff(newFollowers) {
  let removed = prevFollowers.filter((obj) => newFollowers.indexOf(obj) == -1);
  let added = newFollowers.filter((obj) => prevFollowers.indexOf(obj) == -1);
  console.log({ removed, added });
}
