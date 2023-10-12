import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const people = dynamoose.model('people', schema);

export const handler = async(event) => {
  let id = event.pathParameters.id;
  
  const response = {
    statusCode: null,
    body: null,
  };
  
  try{
    await people.delete(id);
    response.body = `${id} was deleted!`;
    response.statusCode = 200;
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
  
  return response;
};