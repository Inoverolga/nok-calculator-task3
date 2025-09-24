export const handler = async (event) => {
  function HOK(x, y) {
    //     if (![x, y].every((num) => Number.isInteger(num) && num > 0)) return "NaN";
    // if (![x, y].every((num) => Number.isInteger(num) && num > 0)) {
    if (x < 0 && y < 0) {
      debugger;
      console.log("NaN");
      return "NaN";
    } else {
      function z(a, b) {
        while (b !== 0) {
          let t = b;
          b = a % b;
          a = t;
        }
        return a;
      }
      const s = ((x * y) / z(x, y)).toString();
      console.log(s);
      return (x * y) / z(x, y);
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
    body: result,
  };
};
