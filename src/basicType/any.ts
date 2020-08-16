import axios from "axios";

export {};

const url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  data = [
    {
      id: 1,
      title: "string",
      description: "string",
    },
  ];
  console.log(data);
});
