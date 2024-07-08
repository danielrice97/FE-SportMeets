import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://be-sportmeets-py.onrender.com/api/sportmeets",
});

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

export function updateSpacesAvailable(event) {
  const eventID = event.event_id
  const eventBody = {...event, 
    event_spaces_available: event.event_spaces_available - 1
  }
  delete eventBody.event_id
  return baseApi.patch(`/events/${eventID}`, eventBody).then(({data}) => {
    return data.UpdatedEvent
  })
}
