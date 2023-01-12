// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

// const url = "https://www.balldontlie.io/api/v1/teams/14";
export default function handler(res,req) {

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  params: {page: '0', per_page: '25'},
  headers: {
    'X-RapidAPI-Key': '8acd110f16msh8ab908907b8a392p1b1f53jsn59199f328434',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
