import { formatDate, parseDate } from "../utils/dateUtils";

test("formats date as MM/DD/YYYY correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "MM/DD/YYYY");
  expect(formattedDate).toBe("09/14/2023");
});

test("formats date as DD-MM-YYYY correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "DD-MM-YYYY");
  expect(formattedDate).toBe("14-09-2023");
});

test("formats date as MM-DD-YYYY correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "MM-DD-YYYY");
  expect(formattedDate).toBe("09-14-2023");
});

test("formats date as DD/MM/YYYY correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "DD/MM/YYYY");
  expect(formattedDate).toBe("14/09/2023");
});

test("formats date as ISO correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "ISO");
  expect(formattedDate).toBe("14-09-2023");
});

test("formats date as US correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "US");
  expect(formattedDate).toBe("09/14/2023");
});

test("formats date as UK correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "UK");
  expect(formattedDate).toBe("14/09/2023");
});

test("formats date as short correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "short");
  expect(formattedDate).toBe("Sep 14, 2023");
});

test("formats date as long correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "long");
  expect(formattedDate).toBe("September 14, 2023");
});

test("formats date as day correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "day");
  expect(formattedDate).toBe("Thursday 14th Sep, 2023");
});

test("formats time as HH:mm correctly", () => {
  const formattedDate = formatDate("2023-09-14T12:34:56Z", "HH:mm");
  expect(formattedDate).toBe("18:04");
});

test("formats time as hh:mm A correctly", () => {
  const formattedDate = formatDate("2023-09-14T12:34:56Z", "hh:mm A");
  expect(formattedDate).toBe("06:04 PM");
});

test("formats date and time as MM/DD/YYYY HH:mm:ss correctly", () => {
  const formattedDate = formatDate(
    "2023-09-14T12:34:56Z",
    "MM/DD/YYYY HH:mm:ss"
  );
  expect(formattedDate).toBe("09/14/2023 18:04:56");
});

test("formats date and time as DD-MM-YYYY hh:mm A correctly", () => {
  const formattedDate = formatDate(
    "2023-09-14T12:34:56Z",
    "DD-MM-YYYY hh:mm A"
  );
  expect(formattedDate).toBe("14-09-2023 06:04 PM");
});

test("formats date as Weekday Abbreviation correctly", () => {
  const formattedDate = formatDate(
    "2023-09-14T00:00:00Z",
    "Weekday Abbreviation"
  );
  expect(formattedDate).toBe("Thu");
});

test("formats date as Month Abbreviation correctly", () => {
  const formattedDate = formatDate(
    "2023-09-14T00:00:00Z",
    "Month Abbreviation"
  );
  expect(formattedDate).toBe("Sep");
});

test("formats date as Quarterly Format correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "Quarterly Format");
  expect(formattedDate).toBe("Q3 2023");
});

test("formats date as Year Only correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "Year Only");
  expect(formattedDate).toBe("2023");
});

test("formats date as Month and Year Only correctly", () => {
  const formattedDate = formatDate(
    "2023-09-14T00:00:00Z",
    "Month and Year Only"
  );
  expect(formattedDate).toBe("September 2023");
});

test("formats date as Day of the Year correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "Day of the Year");
  expect(formattedDate).toBe("Day 257 of 2023");
});

test("formats date as Relative Time correctly", () => {
  const formattedDate = formatDate("2023-09-14T00:00:00Z", "Relative Time");
  expect(formattedDate).toBe("13 hours ago");
});

test("parses date correctly", () => {
  const parsedDate = parseDate("2023-09-14T00:00:00Z");
  expect(parsedDate).toEqual(new Date("2023-09-14T00:00:00Z"));
});
