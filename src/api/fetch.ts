type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface FromData {
  [key: string]: any;
}

const token = sessionStorage.getItem("token");

async function ajax(url: string, method: Method, body?: BodyInit) {
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
    const response = await fetch(`${environment.server.url}/${url}`, init);
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
  get: (url: string, query: FromData) => {
    if (Object.keys(query).length === 0) return ajax(url, "GET");
    const SearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      SearchParams.append(key, value);
    }
    const result = `${url}?${SearchParams.toString()}`;
    return ajax(result, "GET");
  },
  post: (url: string, body: FromData) => {
    const data = JSON.stringify(body);
    return ajax(url, "POST", data);
  },
  put: (url: string, id: string | number, body: unknown) => {
    const data = JSON.stringify(body);
    return ajax(`${url}/${id}`, "PUT", data);
  },
  delete: (url: string, id: string | number) => {
    return ajax(`${url}/${id}`, "DELETE");
  },
};
