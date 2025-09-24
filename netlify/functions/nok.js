export const handler = async (event) => {
  function HOK(x, y) {
    //     if (![x, y].every((num) => Number.isInteger(num) && num > 0)) return "NaN";
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
      return "NaN";
    } else {
      function z(a, b) {
        while (b !== 0) {
          let temp = b;
          b = a % b;
          a = temp;
        }
        return a;
      }

      return ((x * y) / z(x, y)).toString();
    }
  }

  const { x, y } = event.queryStringParameters;

  const result = HOK(+x, +y);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
    body: result.toString(),
  };
};
