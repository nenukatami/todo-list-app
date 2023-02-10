import { useState, useEffect, useMemo } from "react";

export const useFetchDeveloper = (developer) => {
  const todos = useMemo(() => {
    return [
      {
        id: "1",
        name: "Create Todos List App",
        user: "programmer 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor phasellus, aptent nunc leo pulvinar sed orci velit interdum, curabitur turpis per dignissim mollis nulla pellentesque cras.",
      },
      {
        id: "2",
        name: "Show List of Todos",
        user: "programmer 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor phasellus, aptent nunc leo pulvinar sed orci velit interdum, curabitur turpis per dignissim mollis nulla pellentesque cras.",
      },
      {
        id: "3",
        name: "Filter Todos by user",
        user: "programmer 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor phasellus, aptent nunc leo pulvinar sed orci velit interdum, curabitur turpis per dignissim mollis nulla pellentesque cras.",
      },
      {
        id: "4",
        name: "Check first steps",
        user: "programmer 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor phasellus, aptent nunc leo pulvinar sed orci velit interdum, curabitur turpis per dignissim mollis nulla pellentesque cras.",
      },
      {
        id: "5",
        name: "To create a better Todos list example for development mode",
        user: "programmer 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor phasellus, aptent nunc leo pulvinar sed orci velit interdum, curabitur turpis per dignissim mollis nulla pellentesque cras.",
      },
    ];
  }, [])

  const [state, setState] = useState({
    data: todos,
  });

  useEffect(() => {

    if (developer !== '') {
      const todosByDeveloper = todos.filter(
        (todo) => todo.user === developer
      );

      setState({
        data: todosByDeveloper.length > 0 ? todosByDeveloper : [],
      });
    }

  }, [developer, todos]);

  return state;
};
