import { TokenService } from "./token.service";

describe("O serviço TokenService", () => {
  let service: TokenService;
  beforeEach(() => {
    service = new TokenService();
  });
  it("Deve ser instânciado", () => {
    expect(service).toBeTruthy();
  });
});
