export const fetchEvents = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${id}`,
  })
);

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { event }
  })
);

export const updateEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: { event }
  })
);

export const deleteEvent = (event) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${event.id}`
  })
);
