export const handler = async (event) => {
  function HOK(x, y) {
    if ([x, y].some((num) => num === 0)) return "0";
    if (![x, y].every((num) => Number.isInteger(num) && num > 0)) return "NaN";

    function not(a, b) {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
    const z = not(x, y);
    return (x / z) * y;
  }

  const { x, y } = event.queryStringParameters;

  if (!x || !y) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
      body: "NaN",
    };
  }

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
