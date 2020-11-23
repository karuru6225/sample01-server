export async function withAuth(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify('withAuthが呼ばれました'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  };
}

export async function withoutAuth(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify('withoutAuthが呼ばれました'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  };
}
