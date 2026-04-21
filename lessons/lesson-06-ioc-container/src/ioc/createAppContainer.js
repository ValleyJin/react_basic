/**
 * Composition root(조립 루트): 앱이 시작될 때 **한 번만** 의존성을 연결하는 장소.
 *
 * React 컴포넌트 트리 어디서든 직접 new 하지 않고,
 * 여기서 register → resolve로 객체를 만들어 Context에 넣는다.
 */
import { ServiceContainer } from './ServiceContainer.js'
import { createMenuRepository } from '../services/createMenuRepository.js'
import { createNotifier } from '../services/createNotifier.js'

/** localStorage 키 — 5강과 호환되도록 동일 문자열 유지 */
export const MENU_STORAGE_KEY = 'beanlog-menu-v1'

/**
 * 컨테이너를 만들고 서비스를 등록한 뒤, React에 넘길 객체를 만든다.
 *
 * @returns {{ container: ServiceContainer, services: AppServices }}
 */
export function createAppServices() {
  const container = new ServiceContainer()

  // 1) 알림기: 다른 서비스가 의존할 수 있도록 먼저 등록
  container.register(
    'notifier',
    () =>
      createNotifier({
        // 교육용: 콘솔에만 남김(소음 줄이려면 useAlert: true 로 바꿔 볼 수 있음)
        useAlert: false,
      }),
    { singleton: true },
  )

  // 2) 메뉴 저장소 (필요하면 factory 안에서 c.resolve('notifier')로 다른 등록을 끌어다 쓸 수 있음)
  container.register(
    'menuRepository',
    () =>
      createMenuRepository({
        storageKey: MENU_STORAGE_KEY,
      }),
    { singleton: true },
  )

  const services = {
    notifier: /** @type {ReturnType<createNotifier>} */ (container.resolve('notifier')),
    menuRepository: /** @type {ReturnType<createMenuRepository>} */ (
      container.resolve('menuRepository')
    ),
  }

  return { container, services }
}
