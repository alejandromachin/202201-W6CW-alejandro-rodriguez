import { loadAllRobotsThunk } from "./robotsThunk";

describe("Given a loadAllRobotsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the loadAllRobotsAction", async () => {
      const dispatch = jest.fn();

      await loadAllRobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
