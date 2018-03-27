import axios from 'axios'
import querystring from 'querystring'

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

const creatQuestion = (params) => axios.post('/v1/questions',querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));
const login = (params) => axios.post('/v1/questions',querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));
const queryQuestion = () => axios.get('/v1/questions')
  .then(response => response.data)
  .catch(error => console.log(error));
const queryLessons = () => axios.get('/v1/lessons')
  .then(response => response.data)
  .catch(error => console.log(error));
  
export { creatQuestion, queryQuestion, queryLessons, login };
