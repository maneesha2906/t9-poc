export default async (url, method, payload = {}, customHeaders = {}) => {
  const options = {
    method,
    headers: {
      ...customHeaders,
    },
    body: JSON.stringify(payload),
    mode: "cors",
  };

  if (method.toUpperCase() === "GET") delete options.body;

  const response = await fetch(url, options);
  if (response?.ok) return response.json();

  const failedResp = await response.json();
  throw new Error(JSON.stringify(failedResp));
};
