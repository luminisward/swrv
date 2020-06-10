import { Ref } from 'vue'
import SWRVCache from './lib/cache'

export type fetcherFn<Data> = (...args: any) => Data | Promise<Data>

export interface IConfig {
  refreshInterval?: number
  cache?: SWRVCache
  dedupingInterval?: number
  ttl?: number
  serverTTL?: number
  revalidateOnFocus?: boolean
  revalidateDebounce?: number
}

export interface IResponse<Data = any, Error = any> {
  data?: Ref<Data | undefined>
  error?: Ref<Error | undefined>
  isValidating: Ref<boolean>
  revalidate: () => Promise<void>
}

type keyFunction = () => string | null

export type IKey = keyFunction | string | null
