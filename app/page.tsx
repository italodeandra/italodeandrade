import Image from "next/image";

const projects = [
  {
    name: "Majapi",
    description: "Software development company",
    href: "https://majapi.com",
    logo: "/majapi.png",
  },
  {
    name: "Majapi E-commerce",
    description: "Majapi's ecommerce platform",
    href: "https://ecommerce.majapi.com",
    logo: "/ecommerce.png",
  },
  {
    name: "Trackfy",
    description: "Private streaming service",
    href: "https://trackfy.com",
    logo: "/trackfy.png",
  },
  {
    name: "Boneare Café",
    description: "Ground roasted coffee",
    href: "https://boneare.com",
    logo: "/boneare.png",
  },
  {
    name: "YouTube Plus",
    description: "Hide watched videos",
    href: "https://github.com/italodeandra/youtube-plus",
    logo: "/youtube-plus.png",
  },
];

// Brand paths from Simple Icons (CC0); the mail outline from Heroicons (MIT).
const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/italodeandra/",
    outline: false,
    path: "M7.03.084c-1.277.06-2.149.264-2.91.563a5.874 5.874 0 0 0-2.124 1.388 5.878 5.878 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076.008 8.354-.005 8.764.001 12.023c.007 3.259.021 3.667.083 4.947.061 1.277.264 2.149.563 2.911.308.789.72 1.457 1.388 2.123a5.872 5.872 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552 1.278.056 1.689.069 4.947.063 3.257-.007 3.668-.021 4.947-.082 1.28-.06 2.147-.265 2.91-.563a5.881 5.881 0 0 0 2.123-1.388 5.881 5.881 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912.056-1.28.07-1.69.063-4.948-.006-3.258-.02-3.667-.081-4.947-.06-1.28-.264-2.148-.564-2.911a5.892 5.892 0 0 0-1.387-2.123 5.857 5.857 0 0 0-2.128-1.38C19.074.322 18.202.12 16.924.066 15.647.009 15.236-.006 11.977 0 8.718.008 8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.736 3.736 0 0 1-1.382-.895 3.695 3.695 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.705 3.705 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.804.244 2.227.408.56.216.96.475 1.382.895.421.42.681.817.9 1.378.165.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848.005 3.203-.006 3.583-.061 4.848-.051 1.17-.245 1.805-.408 2.23-.216.56-.477.96-.896 1.38a3.705 3.705 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079-3.204.007-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442 1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024 6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16 4 4 0 0 1 8 12.008",
  },
  {
    name: "GitHub",
    href: "https://github.com/italodeandra",
    outline: false,
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    name: "Email",
    href: "mailto:italodeandra@gmail.com",
    outline: true,
    path: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
  },
];

const age = new Date().getFullYear() - 1997;

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col-reverse md:h-svh md:flex-row">
      <section className="flex items-center p-4 md:w-1/2 md:justify-end md:pr-0">
        <div>
          <h1 className="text-6xl leading-[0.9] font-medium lg:text-7xl">
            Ítalo Andrade
          </h1>
          <p className="text-4xl">Developer</p>
          <p className="text-xl">{age}. Brazilian.</p>

          <p className="mt-16 text-lg">Things I&apos;m proud of:</p>
          <ul className="mt-4 flex flex-wrap gap-4 md:mt-2 md:gap-2">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  title={`${project.name}\n${project.description}`}
                >
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={64}
                    height={64}
                    className="size-16 grayscale transition-[filter] hover:grayscale-0 md:size-8"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="group mt-16">
            <p>@italodeandra</p>
            <ul className="mt-4 flex flex-wrap gap-4 md:mt-2 md:gap-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    aria-label={social.name}
                    className="block transition-transform md:scale-0 md:group-hover:scale-100 md:focus-visible:scale-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-8 md:size-6"
                      fill={social.outline ? "none" : "currentColor"}
                      stroke={social.outline ? "currentColor" : undefined}
                      strokeWidth={social.outline ? 1.5 : undefined}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative h-[400px] md:h-auto md:w-1/2">
        <Image
          src="/me.JPG"
          alt="Ítalo Andrade"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-66% to-background md:bg-linear-to-l" />
      </section>
    </main>
  );
}
