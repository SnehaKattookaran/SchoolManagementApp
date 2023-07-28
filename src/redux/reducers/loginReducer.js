const initialState = {
  isAuthenticated: false,
  user: {
    id:0,
    email:"",
    first_name:"",
    last_name:"",
    avatar:""
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id:action.payload.id,
          email:action.payload.email,
          first_name:action.payload.first_name,
          last_name:action.payload.last_name,
          avatar:action.payload.avatar
        }
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        isAuthenticated: false,
        user: {
          id:0,
          email:"",
          first_name:"",
          last_name:"",
          avatar:""
        }
      };
    default:
      return state;
  }
};
export default loginReducer;
