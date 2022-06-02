import Icon from "@italodeandra/ui/components/Icon";
import Typography from "@italodeandra/ui/components/Typography";
import {
  Box,
  Link,
  Stack,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import instagramIcon from "@iconify/icons-fa-brands/instagram";
import githubIcon from "@iconify/icons-fa-brands/github";
import mailIcon from "@iconify/icons-heroicons-outline/mail";
import { useWindowScroll } from "react-use";

const age = new Date().getFullYear() - 1997;

const HomeView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"), {
    defaultMatches: false,
  });
  const { y: scrollY } = useWindowScroll();

  return (
    <Box
      sx={{
        height: {
          md: "100vh",
        },
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          width: {
            md: "50%",
          },
          display: "flex",
          justifyContent: {
            md: "flex-end",
          },
          alignItems: "center",
          py: 2,
          pl: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: (theme) => ({
                lg: theme.typography.pxToRem(70),
                xs: theme.typography.pxToRem(60),
              }),
              fontFamily: "Poppins",
              fontWeight: 500,
              lineHeight: 0.9,
            }}
          >
            Ítalo Andrade
          </Typography>
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.pxToRem(40),
              fontFamily: "Poppins",
            }}
          >
            Developer
          </Typography>
          <Typography
            sx={{
              fontSize: (theme) => theme.typography.pxToRem(20),
            }}
          >
            {age}. Brazilian.
          </Typography>
          <Typography
            sx={{
              mt: 8,
              fontSize: (theme) => theme.typography.pxToRem(18),
            }}
          >
            Things I'm proud of:
          </Typography>
          <Stack
            direction={"row"}
            gap={{
              xs: 2,
              md: 1,
            }}
            sx={{
              flexWrap: "wrap",
              mt: {
                xs: 2,
                md: 1,
              },
              "& img": {
                width: {
                  xs: 64,
                  md: 32,
                },
                filter: "grayscale(100%)",
                transition: (theme) => theme.transitions.create("filter"),
                "&:hover": {
                  filter: "none",
                },
              },
            }}
          >
            <Tooltip
              title={
                <>
                  <div>Majapi</div>
                  <div>Software development company</div>
                </>
              }
            >
              <Link href="https://majapi.com" target={"_blank"}>
                <Box component={"img"} src={"/majapi.png"} />
              </Link>
            </Tooltip>
            <Tooltip
              title={
                <>
                  <div>Majapi E-commerce</div>
                  <div>Majapi's ecommerce platform</div>
                </>
              }
            >
              <Link href="https://ecommerce.majapi.com" target={"_blank"}>
                <Box component={"img"} src={"/ecommerce.png"} />
              </Link>
            </Tooltip>
            <Tooltip
              title={
                <>
                  <div>Trackfy</div>
                  <div>Private streaming service</div>
                </>
              }
            >
              <Link href="https://trackfy.com" target={"_blank"}>
                <Box component={"img"} src={"/trackfy.png"} />
              </Link>
            </Tooltip>
            <Tooltip
              title={
                <>
                  <div>Boneare Café</div>
                  <div>Ground roasted coffee</div>
                </>
              }
            >
              <Link href="https://boneare.com" target={"_blank"}>
                <Box component={"img"} src={"/boneare.png"} />
              </Link>
            </Tooltip>
            <Tooltip
              title={
                <>
                  <div>YouTube Plus</div>
                  <div>Hide watched videos</div>
                </>
              }
            >
              <Link
                href="https://github.com/italodeandra/youtube-plus"
                target={"_blank"}
              >
                <Box component={"img"} src={"/youtube-plus.png"} />
              </Link>
            </Tooltip>
          </Stack>
          <Box
            sx={{
              "& .zoom": {
                transition: (theme) => theme.transitions.create("transform"),
                transform: {
                  md: "scale(0)",
                },
              },
              "&:hover .zoom": {
                transform: "scale(1)",
              },
            }}
          >
            <Typography
              sx={{
                mt: 8,
                fontSize: (theme) => theme.typography.pxToRem(16),
              }}
            >
              @italodeandra
            </Typography>
            <Stack
              direction={"row"}
              gap={{
                xs: 2,
                md: 1,
              }}
              sx={{
                flexWrap: "wrap",
                mt: {
                  xs: 2,
                  md: 1,
                },
                "& svg": {
                  fontSize: {
                    xs: 32,
                    md: 24,
                  },
                },
              }}
            >
              <Tooltip title={"Instagram"}>
                <Link
                  href="https://www.instagram.com/italodeandra/"
                  target={"_blank"}
                  className={"zoom"}
                  color={"inherit"}
                >
                  <Icon icon={instagramIcon} />
                </Link>
              </Tooltip>
              <Tooltip title={"GitHub"}>
                <Link
                  href="https://github.com/italodeandra"
                  target={"_blank"}
                  className={"zoom"}
                  color={"inherit"}
                >
                  <Icon icon={githubIcon} />
                </Link>
              </Tooltip>
              <Tooltip title={"Email"}>
                <Link
                  href="mailto:italodeandra@gmail.com"
                  target={"_blank"}
                  className={"zoom"}
                  color={"inherit"}
                >
                  <Icon icon={mailIcon} />
                </Link>
              </Tooltip>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/me.JPG)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: {
            md: "50%",
          },
          height: {
            xs: 400,
            md: "auto",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            background: (theme) => ({
              xs: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 66%, ${theme.palette.background.default} 100%)`,
              md: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 66%, ${theme.palette.background.default} 100%)`,
            }),
            position: "relative",
          }}
        >
          <Tooltip
            title={"This is me"}
            open={isMobile && scrollY === 0}
            placement="top"
          >
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "red",
                left: "40%",
                top: "22%",
                height: "76%",
                width: "27%",
                opacity: 0,
              }}
            ></Box>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeView;
