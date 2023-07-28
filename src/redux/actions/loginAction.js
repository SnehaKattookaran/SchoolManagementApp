export const getLogin = (data) => {
  return({
    type: "LOGIN_SUCCESS",
    payload: data
  })
}

export const getLogout = () => {
  return({
    type: "LOGOUT_SUCCESS"
  })
}