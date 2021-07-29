export default function useFetch(baseUrl) {
  const get = (url) => {
    return fetch(baseUrl + url).then((res) => res.json());
  };

  return {
    get
  };
}
