/**
 * 사용자에게 짧은 피드백을 주는 역할 — 콘솔/alert 등 “구체적인 출력”은 여기 한곳에 모을 수 있다.
 *
 * 나중에 토스트 UI로 바꾸고 싶으면 이 팩토리만 고치면 되고,
 * MenuPage는 여전히 notifier.success('...') 만 호출하면 된다.
 */

/**
 * @param {{ log?: typeof console.log, useAlert?: boolean }} [options]
 */
export function createNotifier({ log = console.log.bind(console), useAlert = false } = {}) {
  function show(kind, message) {
    const line = `[BeanLog] ${kind}: ${message}`
    log(line)
    if (useAlert) {
      window.alert(line)
    }
  }

  return {
    info(message) {
      show('알림', message)
    },
    success(message) {
      show('성공', message)
    },
  }
}
