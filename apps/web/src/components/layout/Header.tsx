import { css } from "@styled-system/css";
import { Box, Flex, HStack } from "@styled-system/jsx";
import { Button } from "@/components/ui/Button";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";
import Link from "next/link";

export async function Header() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header
      className={css({
        bg: "white",
        p: "4",
        boxShadow: "sm",
        borderBottom: "1px solid",
        borderColor: "gray.200",
      })}
    >
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        <Link href="/" passHref>
          <Box
            className={css({
              fontSize: "2xl",
              fontWeight: "bold",
              color: "brand.secondary",
              cursor: "pointer",
            })}
          >
            LearnBridge
            <span className={css({ color: "brand.primary" })}>Edu</span>
          </Box>
        </Link>
        <HStack gap="4">
          {session ? (
            <>
              <Link href="/dashboard" passHref>
                <Button variant="secondary">Dashboard</Button>
              </Link>
              <form action={logout}>
                <Button variant="primary">Logout</Button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" passHref>
                <Button variant="secondary">Teacher Login</Button>
              </Link>
              <Link href="/login" passHref>
                <Button variant="primary">Student Portal</Button>
              </Link>
            </>
          )}
        </HStack>
      </Flex>
    </header>
  );
}
