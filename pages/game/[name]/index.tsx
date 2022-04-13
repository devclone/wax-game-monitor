import { Game } from "../../../views";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

interface CalculatorProps {
  name: string;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "warspace" } },
      { params: { name: "farmerworld" } },
      { params: { name: "spacecraftxc" } },
      { params: { name: "seafarmersio" } },
      { params: { name: "ageoffarming" } },
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<CalculatorProps>> => {
  const { name }: any = context.params;

  return {
    props: {
      name: name,
    },
  };
};

export default Game;
