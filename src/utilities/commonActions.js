/*----------Getting Axios data----------*/
export const getSuccessData = (res) => {
  return res.data;
};

export const getErrorData = (err) => {
  return err.response?.data?.error ?? 'Something went wrong';
};

export const getErrorStatus = (err) => {
  return err.response.status;
}