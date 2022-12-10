import { router } from '@src/utils/router'
import { authMiddleware, loggerMiddleware } from '@src/middlewares/index'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { lambdaResult } from '@src/middlewares/response'
import * as T from 'huelgo-monad/lib/type/try'

export const handleBye = router(
  [authMiddleware(), loggerMiddleware()],
  async (e: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return lambdaResult(T.passed('hello world'))
  }
)
