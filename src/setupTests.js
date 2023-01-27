import '@testing-library/jest-dom';


const { server } = require("./mocks/server");


beforeAll(() => {
  // Enable the mocking in tests.
  server.listen({ onUnhandledRequest: "error" })
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})