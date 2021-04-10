import Head from "next/head"
import { useState } from "react"
// @ts-ignore
import { animated, interpolate, useSprings } from "react-spring"
import { useGesture } from "react-use-gesture"

const cards = [
  <div className="card">
    <h2>Hi! My name is Ítalo.</h2>
  </div>,
  <div className="card">
    <h2>This is me</h2>
    <div
      style={{
        backgroundImage: "url(/me.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 8 * 20,
        width: 8 * 20,
      }}
    />
  </div>,
  <div className="card">
    <h2>I do code.</h2>
  </div>,
  <div className="card">
    <h2>And the following are some examples I'm proud of:</h2>
  </div>,
  <div className="card">
    <h1>Majapi</h1>
    <div
      className="project"
      style={{
        backgroundImage: "url(/majapi.png)",
      }}
    />
    <p>This is my company landing page.</p>
    <p>
      <a href="https://majapi.com" target="_blank">
        majapi.com
      </a>
    </p>
  </div>,
  <div className="card">
    <h1>React Library</h1>
    <div
      className="project"
      style={{
        backgroundImage: "url(/react-library.png)",
      }}
    />
    <p>
      This is the library I developed to share React code between my projects.
    </p>
    <p>
      <a href="https://github.com/italodeandra/react-library" target="_blank">
        github/react-library
      </a>
    </p>
  </div>,
  <div className="card">
    <h1>YouTube Plus</h1>
    <div
      className="project"
      style={{
        backgroundImage: "url(/youtube-plus.png)",
      }}
    />
    <p>
      This is an extension to save which YouTube videos you watched and then
      hide them.
    </p>
    <p>
      <a href="https://github.com/italodeandra/youtube-plus" target="_blank">
        github/youtube-plus
      </a>
    </p>
  </div>,
  <div className="card">
    <p style={{ marginTop: "auto" }}>
      <a href="mailto:italodeandra@gmail.com">italodeandra@gmail.com</a>
      <br />
      <a href="https://github.com/italodeandra">github.com/italodeandra</a>
    </p>
  </div>,
].reverse()

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

const Deck = () => {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(),
  }))
  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!down && trigger) gone.add(index)
      // @ts-ignore
      set((i) => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
        const scale = down ? 1.1 : 1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === cards.length) {
        // @ts-ignore
        setTimeout(() => gone.clear() || set((i) => to(i)), 600)
      }
    }
  )
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            {cards[i]}
          </animated.div>
        </animated.div>
      ))}
    </>
  )
}

const Home = () => (
  <div id="root">
    <Head>
      <title>Ítalo de Andrade</title>
      <link rel="icon" href={"/favicon.ico"} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={"/apple-touch-icon.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={"/favicon-32x32.png"}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={"/favicon-16x16.png"}
      />
      <link rel="manifest" href={"/site.webmanifest"} />
    </Head>

    <Deck />
  </div>
)

// noinspection JSUnusedGlobalSymbols
export default Home
