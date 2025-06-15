"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  // type-casting here for convenience
  // in a real app you should validate values
  const data = Object.fromEntries(formData);

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return redirect(`/login?message=Could not authenticate user`);
  }

  // Revalidate the entire application to reflect the new auth state
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}
