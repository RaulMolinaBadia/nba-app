// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

// const url = "https://www.balldontlie.io/api/v1/teams/14";
export default function handler(res,req) {

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  params: {page: '0', per_page: '25'},
  headers: {
    'X-RapidAPI-Key': 'e8079d9059mshaf2885320dead3bp16650ejsne54672d3a921',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
