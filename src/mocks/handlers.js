import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_DEVURL}/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "robot1" },
        { id: 2, name: "robot2" },
      ])
    );
  }),
  rest.get(`${process.env.REACT_APP_DEVURL}/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 1, name: "robot1" }));
  }),
  rest.get(`${process.env.REACT_APP_DEVURL}/undefined`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: "test", name: "test" }));
  }),
  rest.post(
    `${process.env.REACT_APP_DEVURL}/create/?Authorization=Bearer_1`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ id: "test", name: "test" }));
    }
  ),
];
