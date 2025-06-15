import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { css } from "@styled-system/css";
import { Flex, Box } from "@styled-system/jsx";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <Flex direction="column" minH="100vh">
      <Box p={8}>
        <h1 className={css({ fontSize: "3xl", fontWeight: "bold" })}>
          Welcome to your Dashboard
        </h1>
        <p className={css({ mt: 2, color: "text.secondary" })}>
          Your authenticated user email is: {session.user.email}
        </p>
        <p className={css({ mt: 4, fontStyle: "italic" })}>
          The student and teacher features will be built here.
        </p>
      </Box>
    </Flex>
  );
}
