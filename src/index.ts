import { Sum } from "../types";

export class SumClient implements Sum {
  public sum(one: number, two: number) {
    const a = 0;
    return one + two;
  }
}

export default SumClient;
