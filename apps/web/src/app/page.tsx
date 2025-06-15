import { css } from "@styled-system/css";
import { Flex, Container, Stack } from "@styled-system/jsx";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <Container maxW="7xl" p={{ base: 4, md: 8 }}>
      <Flex
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        h="calc(90vh - 80px)"
      >
        <h1
          className={css({
            fontFamily: "heading",
            fontSize: { base: "4xl", md: "6xl" },
            fontWeight: "extrabold",
            color: "brand.secondary",
            maxW: "2xl",
          })}
        >
          The Future of Education, Powered by AI
        </h1>
        <p
          className={css({
            mt: "4",
            fontSize: "lg",
            color: "text.secondary",
            maxW: "xl",
          })}
        >
          Personalized learning paths, gamified experiences, and intelligent
          tools for students, teachers, and schools across Ghana.
        </p>
        <Stack mt="10">
          <Button
            className={css({
              transform: "scale(1.1)",
            })}
          >
            Request a Demo
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
