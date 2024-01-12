"use client"

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";

interface AdminDashboardPageProps {}

const AdminDashboardPage = () => {
  const role = useCurrentRole();
  
  if (role !== UserRole.ADMIN) {
    redirect("/")
  }
  return (
<div className="flex items-center justify-center min-h-screen h-auto">
AdminDashboardPage
</div>
  );
}
export default AdminDashboardPage;