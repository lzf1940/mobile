// 请求参数 请求方式
import service from "./service";

export function get(url, data) {
  return service.get(url, {
    params: data,
  });
}

export function post(url, data) {
  return service.post(url, data);
}

export function postFormData(url, data) {
  return service.post(url, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export function postForm(url, data) {
  return service.post(url, data, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
}
