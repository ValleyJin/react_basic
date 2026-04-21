/**
 * ServiceContainer — 교육용 “아주 작은” IoC(Inversion of Control) 컨테이너
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ 왜 이런 클래스가 있나?                                                    │
 * │ - 컴포넌트 안에서 `localStorage`나 `fetch`를 직접 부르면,                 │
 * │   “나중에 저장소만 갈아끼우고 싶다” 같은 요구가 왔을 때 수정 범위가 넓다. │
 * │ - 대신 “저장을 맡기는 역할(인터페이스에 가까운 객체)”을 밖에서 주입하면,   │
 * │   화면 코드는 “무엇을 할지”에 집중하고 “어디에 저장하는지”는 분리된다.     │
 * │   이것이 제어의 역전(IoC)의 한 모습이다.                                  │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * 이 파일의 컨테이너는:
 * - 문자열 키(예: 'menuRepository')로 “무엇을 만들지”를 등록(register)하고
 * - resolve(키)로 실제 객체를 꺼내 쓴다.
 * - singleton 옵션이 true이면, 같은 키는 항상 **같은 인스턴스**를 돌려준다.
 */

export class ServiceContainer {
  constructor() {
    /** @type {Map<string, { factory: (c: ServiceContainer) => unknown, singleton: boolean }>} */
    this._registry = new Map()
    /** @type {Map<string, unknown>} singleton 캐시: 키 → 이미 만든 인스턴스 */
    this._singletons = new Map()
  }

  /**
   * 의존성을 등록한다.
   *
   * @param {string} key - 앱 전체에서 구분할 이름(문자열). 오타 나면 resolve 시 에러로 잡히게 하려고 문자열을 쓴다.
   * @param {(container: ServiceContainer) => unknown} factory - 필요할 때 호출되어 인스턴스를 만든다.
   *        인자로 컨테이너 자신이 넘어오므로, 다른 키를 resolve 해서 조립할 수도 있다(연쇄 주입).
   * @param {{ singleton?: boolean }} [options] - singleton: true(기본)면 한 번 만든 뒤 재사용.
   */
  register(key, factory, options = {}) {
    const singleton = options.singleton !== false
    this._registry.set(key, { factory, singleton })
  }

  /**
   * 등록된 키에 대응하는 객체를 돌려준다.
   * - singleton이면 캐시에서 재사용
   * - 아니면 factory를 매번 호출(이 강의에서는 거의 쓰지 않음)
   *
   * @param {string} key
   * @returns {unknown}
   */
  resolve(key) {
    const entry = this._registry.get(key)
    if (!entry) {
      throw new Error(
        `[ServiceContainer] "${key}" 는 등록되지 않았습니다. createAppContainer 쪽 register 목록을 확인하세요.`,
      )
    }

    if (entry.singleton) {
      if (!this._singletons.has(key)) {
        // factory 안에서 this.resolve('다른키')를 호출해 의존성을 묶을 수 있다.
        this._singletons.set(key, entry.factory(this))
      }
      return this._singletons.get(key)
    }

    return entry.factory(this)
  }
}
