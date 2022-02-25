export abstract class ArrayUtil {

  static getRandom<T>(list: T[]): T {
    if (list.length < 1){
      return undefined;
    }
    return list[Math.floor(Math.random() * list.length)];
  }
}
