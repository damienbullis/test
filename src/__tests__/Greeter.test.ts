import { Greeter } from "../index";

describe("Greeter", () => {
	it("should greet with message", () => {
		expect(Greeter("TypeScript")).toBe("Hello TypeScript");
	});
});
