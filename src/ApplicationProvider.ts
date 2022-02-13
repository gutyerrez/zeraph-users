import {
  AbstractApplicationProvider,
  Env
} from '@vyrnn/zeraph-core'

export  class ApplicationProvider extends AbstractApplicationProvider {
  public static prepare = async (): Promise<void> => {
    Env.prepare()
  }
}
