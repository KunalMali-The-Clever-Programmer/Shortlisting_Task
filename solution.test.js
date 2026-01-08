const solution = require("./solution");

describe("Weekday Aggregation Tests", () => {

  test("Example 1 - All days present", () => {
    const input = {
      "2020-01-01": 4,
      "2020-01-02": 4,
      "2020-01-03": 6,
      "2020-01-04": 8,
      "2020-01-05": 2,
      "2020-01-06": -6,
      "2020-01-07": 2,
      "2020-01-08": -2
    };

    const expected = {
      Mon: -6, Tue: 2, Wed: 2, Thu: 4,
      Fri: 6, Sat: 8, Sun: 2
    };

    expect(solution(input)).toEqual(expected);
  });

  test("Example 2 - Missing Thu and Fri", () => {
    const input = {
      "2020-01-01": 6,
      "2020-01-04": 12,
      "2020-01-05": 14,
      "2020-01-06": 2,
      "2020-01-07": 4
    };

    const expected = {
      Mon: 2, Tue: 4, Wed: 6, Thu: 8,
      Fri: 10, Sat: 12, Sun: 14
    };

    expect(solution(input)).toEqual(expected);
  });

  test("Only Mon & Sun present", () => {
    const input = {
      "2023-08-21": 10,  // Mon
      "2023-08-27": 20   // Sun
    };

    const expected = {
      Mon: 10, Tue: 11, Wed: 12, Thu: 13,
      Fri: 14, Sat: 15, Sun: 20
    };

    expect(solution(input)).toEqual(expected);
  });



});
