export default function useFetch(baseUrl) {
  function get(url) {
    return fetch(baseUrl + url).then((response) => response.json());
  }

  function post(url, body) {
    return fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((res) => res.json());
  }

  return { get, post };
}
