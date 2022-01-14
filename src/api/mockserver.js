import { createServer } from 'miragejs';
export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
    },
    seeds(server) {
    },
    routes() {
      this.namespace = '/api/laptop';
      this.timing = 2000

      this.get('/', (schema, request) => {
        return [
          { brand: "Apple", name: "MacBook Air", weigth: 0.5 },
          { brand: "Asus", name: "P30", weigth: 1.7 },
          { brand: "Lenovo", name: "A50", weigth: 1.5 },
        ]
      })
    },
  });
  return server;
}
