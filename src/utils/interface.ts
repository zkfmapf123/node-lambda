import { APIGatewayProxyEvent } from 'aws-lambda'

/**
 * Middleware
 */
export type Middleware<T> = (e: T, next: (e: T) => Promise<any>) => Promise<any>

/**
 * Request & Response
 */
export type ProxyEvent = APIGatewayProxyEvent & {
  _body: any
}
