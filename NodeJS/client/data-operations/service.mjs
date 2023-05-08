class Service {
  constructor(url) {
    this.url = url;
    this.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  async getRequest() {
    const response = await fetch(this.url);
    const data = await response.json();

    return data;
  }

  async postRequest(body) {
    const response = await fetch(this.url, {
      body: JSON.stringify(body),
      method: "POST",
      headers: this.headers,
    });
    const data = await response.json();

    return data;
  }

  async patchRequest(body) {
    const response = await fetch(this.url, {
      body: JSON.stringify(body),
      method: "PATCH",
      headers: this.headers,
    });
    const data = await response.json();

    return data;
  }

  async deleteRequest(body, id) {
    const response = await fetch(`${this.url}/${id}`, {
      body: JSON.stringify(body),
      method: "DELETE",
      headers: this.headers,
    });
    // const data = await response.json();

    return response.status;
  }
}

export default Service;
