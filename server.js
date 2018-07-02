import axios from 'axios'
import querystring from 'querystring'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

const queryQuestions = () => axios.get('/v1/questions/5b25d4c8e79b3a9231ba6e4c')
  .then(response => response.data)
  .catch(error => console.log(error));
  
const queryDetails = (lesson_id) => axios.get('/v1/questions',{parmas:{id:lesson_id}})
	.then(response => response.data)
  .catch(error => console.log(error));
  

export { queryQuestions, queryDetails };