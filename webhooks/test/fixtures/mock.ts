const data = {
  event: {
    session_variables: {
      "x-hasura-role": "admin",
    },
    op: "UPDATE",
    data: {
      old: {
        updated_at: "2022-04-21T14:38:34.210045+00:00",
        created_at: "2022-04-21T04:09:35.591848+00:00",
        completed: false,
        id: "74f59abd-e984-45b7-a7d0-4f6b53ee04f3",
        title: "haahahah",
        user_id: "d51bcadf-f8ae-4d50-860c-6ac15c6926f3",
      },
      new: {
        updated_at: "2022-04-21T14:39:09.621954+00:00",
        created_at: "2022-04-21T04:09:35.591848+00:00",
        completed: true,
        id: "74f59abd-e984-45b7-a7d0-4f6b53ee04f3",
        title: "haahahah",
        user_id: "d51bcadf-f8ae-4d50-860c-6ac15c6926f3",
      },
    },
    trace_context: {
      trace_id: "ce9f865b677bd3fb",
      span_id: "b3d5e736ffc37d5a",
    },
  },
  created_at: "2022-04-21T14:39:09.621954Z",
  id: "47f2062f-757b-40ee-9de2-54356f4cfc0f",
  delivery_info: {
    max_retries: 0,
    current_retry: 0,
  },
  trigger: {
    name: "todo_item_updated",
  },
  table: {
    schema: "public",
    name: "todo",
  },
};

export default data;
