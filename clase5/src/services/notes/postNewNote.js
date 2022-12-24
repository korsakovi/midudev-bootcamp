import axios from "axios";

export const postNewNote = ({ title, body, userId }) => {
 return axios
  .post("https://jsonplaceholder.typicode.com/posts", { userId, title, body })
  .then((res) => {
   const { data } = res;
   console.log(data);
   return data;
  });
};
