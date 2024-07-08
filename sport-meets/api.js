import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://be-sportmeets-py.onrender.com/api/sportmeets"
});

export function getAllEvents() {
  return baseApi.get("/events").then((data) => {
    return data;
  });
}

export function getUserEvents(username) {
  return baseApi.get(`/user-events/${username}`).then(({data}) => {
    return data.UserEvents;
  })
  .catch((err) => {
    console.log(err);
  })
}

export function getEventMessages(event_id) {
  return baseApi.get(`/messages/${event_id}`).then(({data}) => {
    const {messages} = data
    return messages.map((message) => {
      return {...message,
        created_at: new Date(message.created_at).toLocaleString()
      }
    })
  })
  .catch((err) => {
    console.log(err);
  })
}