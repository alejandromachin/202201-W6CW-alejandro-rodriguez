import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_DEVURL}robots`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "robot1" },
        { id: 2, name: "robot2" },
      ])
    );
  }),
];
