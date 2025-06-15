import { login } from "./actions";
import { Button } from "@/components/ui/Button";
import { css } from "@styled-system/css";
import { Flex, Box, VStack } from "@styled-system/jsx";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="brand.light" p="4">
      <Box
        maxW="md"
        w="full"
        bg="white"
        boxShadow="xl"
        rounded="lg"
        p={8}
        textAlign="center"
      >
        <Box fontSize="2xl" fontWeight="bold" color="brand.secondary" mb={2}>
          LearnBridge
          <span className={css({ color: "brand.primary" })}>Edu</span>
        </Box>
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            mb: 6,
            color: "text.primary",
          })}
        >
          Sign in to your account
        </h2>
        <form>
          <VStack gap={4}>
            <input
              name="email"
              placeholder="you@example.com"
              required
              className={css({
                width: "100%",
                padding: "0.75rem",
                border: "1px solid",
                borderColor: "gray.300",
                borderRadius: "md",
              })}
            />
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className={css({
                width: "100%",
                padding: "0.75rem",
                border: "1px solid",
                borderColor: "gray.300",
                borderRadius: "md",
              })}
            />
          </VStack>
          <Button formAction={login} variant="primary" mt={6} width="100%">
            Sign In
          </Button>

          {searchParams?.message && (
            <p
              className={css({
                mt: 4,
                p: 4,
                bg: "red.100",
                color: "red.600",
                textAlign: "center",
                borderRadius: "md",
              })}
            >
              {searchParams.message}
            </p>
          )}
        </form>
      </Box>
    </Flex>
  );
}
