import axios from 'axios';

export const getQuestions = (callback) => {
  axios
    .get('https://desert-sand-fox-cape.cyclic.app/api/questions')
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
