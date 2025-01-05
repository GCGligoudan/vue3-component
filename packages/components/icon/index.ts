import _Icon from './src/icon.vue'
import { withInstall } from '@zi-shui/utils/with-install'
export * from './src/icon'

const Icon = withInstall(_Icon)
export default Icon

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof Icon
  }
}
