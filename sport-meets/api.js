import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://be-sportmeets-py.onrender.com/api/sportmeets",
});
console.log(baseApi);
export function getAllEvents(queries) {
  const { params } = queries;
  if (params.category === "select") {
    return baseApi.get("/events").then(({ data }) => {
      console.log(data.events);

      return data.events;
    });
  } else {
    return baseApi.get("/events", queries).then(({ data }) => {
      return data.events;
    });
  }
}
