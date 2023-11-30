import axios from 'axios';

export const getQuestions = (callback) => {
  axios
    .get('https://greenwaste-api.vercel.app/api/questions')
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
