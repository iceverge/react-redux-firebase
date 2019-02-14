const initState = {
  projects: [
    {id: '1', title: 'planting banana', content: 'plant all banana to the mountain'},
    {id: '2', title: 'planting flowers', content: 'plant different flowers to the yard'},
    {id: '3', title: 'catching fish', content: 'go to the sea and grab the both for fishing'}
  ]
}


const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR': 
      console.log('create project error', action.err);
      return state;
    default: 
      return state;
  }
}

export default projectReducer