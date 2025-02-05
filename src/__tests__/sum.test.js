import { Sum } from "../components/sum"
test ("Test for sum component" ,() => {
  const result = Sum(3,4);
  expect(result).toBe(7);
})