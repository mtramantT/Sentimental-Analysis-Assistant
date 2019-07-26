import { TestBed } from "@angular/core/testing";

import { PolkaService } from "./polka.service";
describe("PolkaService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: PolkaService = TestBed.get(PolkaService);
    expect(service).toBeTruthy();
  });
});
