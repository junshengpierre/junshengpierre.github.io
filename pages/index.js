import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import {
  FaBriefcase,
  FaGithub,
  FaLinkedinIn,
  FaLocationArrow,
  FaTwitter,
} from 'react-icons/fa'

const Index = () => (
  <div className={css(tw`grid justify-center items-center h-screen`)}>
    <main className={css(tw`flex flex-col md:flex-row my-8`)}>
      <div className={css(tw`mb-4`)}>
        <img
          className={css(tw`w-64 rounded-full`)}
          src="/profile_image_junshengpierre.jpg"
        />
      </div>

      <div className={css(tw`max-w-md md:ml-8`)}>
        <section className={css(tw`mb-4`)}>
          <h1 className={css(tw`font-semibold text-3xl mb-2 font-sans`)}>
            Teo Jun Sheng, Pierre
          </h1>

          <div className={css(tw`flex flex-row items-center mb-2`)}>
            <FaBriefcase className={css(tw`fill-current text-gray-500`)} />
            <p className={css(tw`ml-2`)}>Software Developer</p>
          </div>

          <div className={css(tw`mb-2`)}>
            <LinkItem
              url="https://www.google.com/maps/place/Singapore/"
              title="Singapore"
              Icon={FaLocationArrow}
            />
          </div>
        </section>

        <section className={css(tw`mb-4`)}>
          <p className={css(tw`mb-3 leading-relaxed`)}>
            I am a Software Developer with 5 years of experience working mostly
            with frontend web and cross-platform mobile developement with
            TypeScript, JavaScript, React and React Native.
          </p>

          <p className={css(tw`mb-3 leading-relaxed`)}>
            I am a team player, and enjoy learning and contributing meaningfully
            to build reliable and maintainable software that enables delightful
            end user experience and empowers stakeholders to achieve their goals
            and deliver impact.
          </p>

          <p className={css(tw`mb-3 leading-relaxed`)}>
            Things I&apos;ve been excited about and am exploring lately are iOS
            development with SwiftUI and full-stack web development.
          </p>
        </section>

        <section className={css(tw`mb-4`)}>
          <ul>
            <li className={css(tw`mb-2`)}>
              <LinkItem
                url="https://www.linkedin.com/in/junshengpierre"
                title="https://www.linkedin.com/in/junshengpierre"
                Icon={FaLinkedinIn}
              />
            </li>
            <li className={css(tw`mb-2`)}>
              <LinkItem
                url="https://github.com/junshengpierre"
                title="https://github.com/junshengpierre"
                Icon={FaGithub}
              />
            </li>
            <li className={css(tw`mb-2`)}>
              <LinkItem
                url="https://twitter.com/junshengpierre"
                title="https://twitter.com/junshengpierre"
                Icon={FaTwitter}
              />
            </li>
          </ul>
        </section>

        <section>
          <h3 className={css(tw`mb-2 font-semibold`)}>Projects</h3>
          <p>Coming soon...</p>
        </section>
      </div>
    </main>
  </div>
)

export default Index

const LinkItem = ({ url, title, Icon }) => (
  <span className={css(tw`flex flex-row items-center`)}>
    <span>
      <Icon className={css(tw`fill-current text-gray-500`)} />
    </span>
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={css(tw`ml-2 hover:underline`)}
    >
      {title}
    </a>
  </span>
)
