export const handler = async (event) => {
  function HOK(a, b) {
    if (![a, b].every((num) => Number.isInteger(num) && num > 0)) return NaN;
    const nod = (x, y) => (y === 0 ? x : nod(y, x % y));
    return (a * b) / nod(a, b);
  }

  const { a, b } = event.queryStringParameters;

  if (!a || !b) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Нужно указать параметры a и b" }),
    };
  }

  const result = HOK(+a, +b);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      a: +a,
      b: +b,
      nok: result,
    }),
  };
};
