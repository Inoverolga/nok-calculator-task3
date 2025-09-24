export const handler = async (event) => {
  function HOK(x, y) {
    if (![x, y].every((num) => Number.isInteger(num) && num > 0)) return NaN;
    const nod = (a, b) => (b === 0 ? a : nod(b, a % b));
    return (x * y) / nod(x, y);
  }

  const { x, y } = event.queryStringParameters;

  if (!x || !y) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "text/plain" },
      body: "Нужно указать параметры x и y",
    };
  }

  const result = HOK(+x, +y);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: isNaN(result) ? "NaN" : result.toString(),
  };
};
