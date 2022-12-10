import { APIGatewayProxyResult } from 'aws-lambda'
import * as T from 'huelgo-monad/lib/type/try'

export const lambdaResult = <E, T>(t: T.Try<E, T>): APIGatewayProxyResult => {
  return {
    statusCode: T.isPass(t) ? 200 : 500,
    body: T.isPass(t) ? JSON.stringify(t.value) : JSON.stringify(t.error),
  }
}
