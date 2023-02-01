import { rest } from "msw";
import { APPLICATIONS_HANDLERS } from "~/mocks/handlers/applications/index";


export const handlers = [
  rest.get("/api/health", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "Success response to /api/health",
      })
    );
  }),
  ...APPLICATIONS_HANDLERS,
];
