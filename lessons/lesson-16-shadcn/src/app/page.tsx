import { redirect } from "next/navigation";

export default function Home() {
  // 이 레슨은 dashboard-01 블록 학습이 목적이므로 루트에서 대시보드로 바로 이동한다.
  redirect("/dashboard");
}
