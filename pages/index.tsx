import { GetServerSideProps } from "next";
import nookies from "nookies";
import HomeView from "../src/views/home/HomeView";

// noinspection JSUnusedGlobalSymbols
export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    cookies: nookies.get(context),
  },
});

const Index = () => <HomeView />;

// noinspection JSUnusedGlobalSymbols
export default Index;
