import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import reactQueryClient from "~/lib/reactQueryClient";
import { server } from "./mocks/server";


configure({ testIdAttribute: "data-testid" });

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});

// general cleanup
afterEach(async () => {
  reactQueryClient.clear();
});
