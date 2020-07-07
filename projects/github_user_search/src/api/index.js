const gitAPI = `https://api.github.com/search/users`;
const userGitAPI = `https://api.github.com/users`;
const myAccount = `OlkaA`;
async function fetchGitUsers(userName) {
  let response;
  if (!userName) {
    response = await fetch(`${gitAPI}?q=${myAccount}`);
  } else {
    response = await fetch(`${gitAPI}?q=${userName}`);
  }
  if (response.status === 200) {
    return await response.json();
  } else {
    return response.statusText;
  }
}

async function fetchGitUser(userLogin) {
  const response = await fetch(`${gitAPI}/${userLogin}`);
  if (response.status === 200) {
    return await response.json();
  } else {
    return response.statusText;
  }
}

async function fetchDetailedInfoUser(login) {
  const response = await fetch(`${userGitAPI}/${login}`);
  if (response.status === 200) {
    return await response.json();
  } else {
    return response.statusText;
  }
}

export { fetchGitUsers, fetchGitUser, fetchDetailedInfoUser };
