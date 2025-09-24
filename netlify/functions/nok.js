export const handler = async (event) => {
  function HOK(x, y) {
    //     if (![x, y].every((num) => Number.isInteger(num) && num > 0)) return "NaN";
    if (!Number.isInteger(x) && x > 0 && !Number.isInteger(y) && y > 0)
      return "NaN";

    function z(a, b) {
      while (b !== 0) {
        b = a % b;
        a = b;
      }
      return a;
    }

    return ((x * y) / z(x, y)).toString();
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
