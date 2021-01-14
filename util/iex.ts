const baseURL = "https://cloud.iexapis.com/";
const sandboxURL = "https://sandbox.iexapis.com/";

// const baseSSEURL = "https://cloud.sse.iexapis.com/";

const pk = process.env.IEXCLOUD_PUBLIC_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;

const prefix = () => {
  return pk && pk[0] === "T" ? sandboxURL : baseURL;
};

export const iexApiRequest = async (
  endpoint: string,
  params = {}
): Promise<any> => {
  try {
    // Proceed to checkout
    const response = await fetch(
      `${prefix()}${apiversion}${endpoint}?` +
        new URLSearchParams({
          token: pk,
          ...params,
        }),
      {}
    );
    let data = await response.json();

    return data;
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
  }
};
