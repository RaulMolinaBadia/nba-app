// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const url = "https://www.balldontlie.io/api/v1/teams/14";
export default function handler(res,req) {
    // res.status(200).json({ name: "John Doe" });
    axios.get(url).then((response) => {
        // url.status(200).json(response.data);
        console.log(response.data);
    });
    <div>
        <h1>hello</h1>
    </div>
}
