export abstract class ObjectHelpers {

  public static isNull(obj: any): boolean {
    return obj === null;
  }

  public static isNullish(obj: any): boolean {
    return this.isNullOrUndefined(obj);
  }

  static isNotNull(obj: any): boolean {
    return !this.isNull(obj);
  }

  static isEmpty(obj: any): boolean {
    let isEmpty = false;
    if (typeof obj === 'object') { // arrays and objects
      isEmpty = Object.keys(obj).length ? false : true;
    }
    return isEmpty;
  }

  static isNotEmpty(obj: any): boolean {
    return !this.isEmpty(obj);
  }

  // Undefined is considered 'Null' here due to historical usage
  static isNullOrEmpty(obj: any): boolean {
    return this.isNullOrUndefined(obj) || this.isEmpty(obj);
  }

  static isNotNullOrEmpty(obj: any): boolean {
    return !this.isNullOrEmpty(obj);
  }

  public static isNotNullish(obj: any): boolean {
    return !this.isNullish(obj);
  }

  public static isUndefined(obj: any): boolean {
    return typeof obj === 'undefined';
  }

  static isNotUndefined(obj: any): boolean {
    return !this.isUndefined(obj);
  }

  public static isNullOrUndefined(obj: any): boolean {
    return this.isNull(obj) || this.isUndefined(obj);
  }

  static isNotNullOrUndefined(obj: any): boolean {
    return !this.isNullOrUndefined(obj);
  }

  public static equals(obj1: any, obj2: string): boolean {
    return (obj1 === obj2);
  }

  public static clone(obj: any): any {
    if (this.isNullish(obj)) {
      return null;
    }
    // Object assign does not work for deep cloning!
    return JSON.parse(JSON.stringify(obj));
  }
}
