"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isAdmin, loginWithPassword, logout } from "@/lib/adminAuth";
import { updateTicket } from "@/lib/tickets";

export async function loginAction(formData: FormData) {
  const ok = await loginWithPassword(String(formData.get("password") ?? ""));
  redirect(ok ? "/admin" : "/admin?error=1");
}

export async function logoutAction() {
  await logout();
  redirect("/admin");
}

export async function updateTicketAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const id = Number(formData.get("id"));
  const status = String(formData.get("status") ?? "");
  const notes = String(formData.get("notes") ?? "");
  if (!Number.isInteger(id)) redirect("/admin");
  await updateTicket(id, { status, notes });
  revalidatePath("/admin");
}
