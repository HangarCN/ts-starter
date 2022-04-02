import { Test } from "../types";

export class TestClient implements Test {
  public console(text: string) {
    console.log(text);
  }
}

export default TestClient;
