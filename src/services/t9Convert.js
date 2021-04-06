import makeApiCall from "../helpers/fetch";
import { gatewayHost, convertT9Endpoint } from "../config";

export default async function t9Convert(numString) {
  const resp = await makeApiCall(
    `${gatewayHost}${convertT9Endpoint}?numString=${numString}`,
    "GET"
  );
  return resp;
}
