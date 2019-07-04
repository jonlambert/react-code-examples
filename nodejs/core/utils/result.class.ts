interface MapFns<T, E, TResult, EResult> {
  success: (a: T) => TResult;
  failure: (e: E) => EResult;
}

export class Result<TSuccess, TError> {
  public static Success<T>(success: T) {
    return new Result<T, any>(success, null, false);
  }

  public static Failure<T>(error: T) {
    return new Result<any, T>(null, error, true);
  }

  constructor(
    private success: TSuccess,
    private error: TError,
    private isError: boolean,
  ) {}

  when<T, E>(mapFns: MapFns<TSuccess, TError, T, E>) {
    return this.isError
      ? mapFns.failure(this.error)
      : mapFns.success(this.success);
  }
}
