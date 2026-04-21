/**
 * MenuPage — 5강과 동작은 같지만, localStorage를 직접 부르지 않는다.
 *
 * - 초기 목록: menuRepository.loadAll()
 * - 저장: menuRepository.saveAll(...)
 * - 사용자 피드백: notifier.success(...)
 *
 * “저장소 구현”이 바뀌어도 이 파일의 흐름(상태 → 목록 렌더)은 그대로 유지하기 쉽다.
 */
import { useEffect, useState } from 'react'
import AddMenuForm from '../components/AddMenuForm.jsx'
import MenuList from '../components/MenuList.jsx'
import { useAppServices } from '../ioc/AppServicesContext.jsx'

export default function MenuPage() {
  const { menuRepository, notifier } = useAppServices()

  const [menuItems, setMenuItems] = useState(() => menuRepository.loadAll())

  useEffect(() => {
    menuRepository.saveAll(menuItems)
  }, [menuItems, menuRepository])

  function handleAdd({ name, price }) {
    setMenuItems((prev) => [...prev, { id: menuRepository.createId(), name, price }])
    notifier.success('메뉴를 추가했습니다.')
  }

  function handleRemove(id) {
    setMenuItems((prev) => prev.filter((item) => item.id !== id))
    notifier.success('메뉴를 삭제했습니다.')
  }

  return (
    <div className="page">
      <section aria-label="메뉴 추가">
        <h2>메뉴 추가</h2>
        <p className="muted">
          추가/삭제 후 콘솔에 알림이 찍히는지 확인해 보세요(Notifier가 보낸 메시지). 새로고침해도 목록은 유지됩니다.
        </p>
        <AddMenuForm onAdd={handleAdd} />
      </section>

      <section aria-label="메뉴 목록">
        <h2>메뉴 목록</h2>
        <MenuList items={menuItems} onRemove={handleRemove} />
      </section>
    </div>
  )
}
