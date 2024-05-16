import apiClient from "./api-client";

//THIS IS REUSABLE, GENERIC HTTP REQUEST. YOU CAN USE THIS DEPENDING WHAT DO YOU WANT TO FETCH AND MODIFY

interface Entity {
  id: number;
}
class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    return apiClient.get<T[]>(this.endpoint);
  }
  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }
  add<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }
  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
