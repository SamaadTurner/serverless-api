import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const people = dynamoose.model('people', schema);

export const handler = async(event) => {
  console.log('this is the body: ', event.body);
  
  const response = {
    statusCode: null,
    body: null,
  };

  console.log('event Parameters', event.eventPara);
  
  
  try{
    let id = event.pathParameters.id;
    let resultsOfOne = await people.scan('id').contains(id).exec();
    console.log('resultsOfOne ------', resultsOfOne);
    response.body = JSON.stringify(resultsOfOne);
    response.statusCode = 200;
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
  
  return response;
};