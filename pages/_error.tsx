import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import nookies from "nookies";

// noinspection JSUnusedGlobalSymbols
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      statusCode: context.res.statusCode,
      cookies: nookies.get(context),
    },
  };
};

// noinspection JSUnusedGlobalSymbols
export default function Page({ statusCode }: { statusCode: number }) {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        {
          "400": "The request received incorrect or missing information",
          "404": "This page was not found",
          "405": "Method not allowed",
          "500": "There was an internal error",
        }[statusCode.toString()]
      }
    </Box>
  );
}
