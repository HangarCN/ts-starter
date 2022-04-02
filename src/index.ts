import { Sum } from "../types";

export class SumClient implements Sum {
  public sum(one: number, two: number) {
    return one + two;
  }
}

export default SumClient;
