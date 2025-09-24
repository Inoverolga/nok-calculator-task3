export const handler = async (event) => {
  function HOK(x, y) {
    if (![x, y].every((num) => Number.isInteger(num) && num > 0)) {
      console.log("NaN");
      return "NaN";
    }

    function z(a, b) {
      while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
      }
      return a;
    }
    const s = ((x * y) / z(x, y)).toString();
    console.log(typeof s);
    return (x * y) / z(x, y);
  }

  const { x, y } = event.queryStringParameters;

  const result = HOK(+x, +y);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
    body: result,
  };
};
