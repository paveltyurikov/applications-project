import { rest } from "msw";


export const handlers = [
  rest.get("/api/health", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "Success response to /api/health",
      })
    );
  }),
];
