import { coreApi } from "..";

export const getEventByType = (type) => {
  return coreApi.get(`/event/type/${type}`);
};

export const getEvent = (id) => {
  return coreApi.get(`/event/${id}`);
};

export const getEventStatus = (id) => {
  return coreApi.get(`/event-participant/status/${id}`);
};

export const registerEvent = (university, event_id) => {
  const param = {
    university: university,
  };
  return coreApi.post(`/event-participant/${event_id}`, param);
};
