const defaultState = [];

const personReducer = (state = defaultState, action) => {
  const { type } = action;
  if (type === "addPerson") {
    const { personToAdd } = action;
    state.push(personToAdd);
  }

  return state;
};

export default personReducer;
