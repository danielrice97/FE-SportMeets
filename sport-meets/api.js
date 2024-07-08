import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://be-sportmeets-py.onrender.com/api/sportmeets",
});
console.log(baseApi);
export function getAllEvents(queries) {
  const { params } = queries;
  if (params.category === "select") {
    return baseApi.get("/events").then(({ data }) => {
      return data.events;
    });
  } else {
    return baseApi.get("/events", queries).then(({ data }) => {
      return data.events;
    });
  }
}

export function getUser(username) {
  return baseApi.get(`/users/${username}`).then(({data}) => {
    return data["user"][0]
  }).catch((err)=> {
    return err
  })
}

export function getEventByOrganiser(username) {
  return baseApi.get(`/events`, {
    params: {
      organiser: username
    }
  }).then(({data}) => {
    return data.events
  }).catch((err)=> {
    return err
  })
}

export function postUser(newUser) {
  return baseApi.post("/users", newUser).then(({data})=> {
    return data
  }).catch((err)=> {
    return err
  })
}

export function postEvent(newEvent) {
  return baseApi.post("/events", newEvent).then((data) => {
    console.log("Success")
    return data
  }).catch((err)=> {
    return err
  })
}