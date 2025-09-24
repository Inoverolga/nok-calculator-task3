export const handler = async (event) => {
  function HOK(x, y) {
    if (!/^\d+$/.test(x) || !/^\d+$/.test(y)) {
      return "NaN";
    }
    const bigX = BigInt(x);
    const bigY = BigInt(y);

    if (bigX <= 0n || bigY <= 0n) {
      return "NaN";
    } else {
      function z(a, b) {
        while (b !== 0n) {
          let t = b;
          b = a % b;
          a = t;
        }
        return a;
      }
      const s = ((bigX * bigY) / z(bigX, bigY)).toString();
      return s;
    }
  }

  const { x, y } = event.queryStringParameters;

  const result = HOK(x, y);

  if (x === undefined || y === undefined) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
      body: "NaN",
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
    body: result,
  };
};
