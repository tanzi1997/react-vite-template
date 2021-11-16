type Method = "GET" | "POST" | "PUT" | "DELETE";

const token = sessionStorage.getItem("token");

async function request(url: string, method: Method, body?: BodyInit) {
  const headers = new Headers();
  headers.append("content-type", "application/json; charset=utf-8");

  if (token) {
    headers.append("authorization", token);
  }

  const init: RequestInit = {
    body,
    method,
    headers,
  };

  if (!body) delete init.body;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_FETCH_BASE_URL}/${url}`,
      init
    );
    if (response.ok) {
      if (response.status === 204) return Promise.resolve();
      return response.json();
    } else {
      if (response.status === 401) {
        window.location.replace("/401");
      } else {
        throw await response.json();
      }
    }
  } catch (error: any) {
    throw error.message;
  }
}

export default {
  get: (url: string, query: object) => {
    if (Object.keys(query).length === 0) return request(url, "GET");
    const SearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      SearchParams.append(key, value as string);
    }
    const result = `${url}?${SearchParams.toString()}`;
    return request(result, "GET");
  },
  post: (url: string, body: object) => {
    const data = JSON.stringify(body);
    return request(url, "POST", data);
  },
  put: (url: string, id: string | number, body: unknown) => {
    const data = JSON.stringify(body);
    return request(`${url}/${id}`, "PUT", data);
  },
  delete: (url: string, id: string | number) => {
    return request(`${url}/${id}`, "DELETE");
  },
};
