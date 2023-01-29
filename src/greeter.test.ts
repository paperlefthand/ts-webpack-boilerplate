import { greeter } from "./greeter";

test("greet to Alice", () => {
    expect(greeter('Alice')).toBe("Hello, Alice!");
});