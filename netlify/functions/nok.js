export const handler = async (event) => {
  function HOK(x, y) {
    if (![x, y].every((num) => Number.isInteger(num) && num > 0)) return "NaN";
    for (let i = Math.max(x, y); i <= x * y; i++)
      if (i % x === 0 && i % y === 0) return i;
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
