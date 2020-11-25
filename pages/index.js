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
  <div className={css(tw`grid md:justify-center md:items-center h-screen`)}>
    <main
      className={css(tw`flex flex-col md:flex-row max-w-full px-4 py-4 pb-24`)}
    >
      <div className={css(tw`mb-4`)}>
        <img
          className={css(tw`w-64 rounded-full`)}
          src="/profile_image_junshengpierre.jpg"
        />
      </div>

      <div className={css(tw`md:ml-8 sm:max-w-md`)}>
        <section className={css(tw`mb-8`)}>
          <h1 className={css(tw`font-semibold text-3xl mb-2 font-sans`)}>
            Teo Jun Sheng, Pierre
          </h1>

          <div className={css(tw`flex flex-row items-center mb-2`)}>
            <FaBriefcase
              className={css(tw`text-gray-500 dark:text-gray-400`)}
            />
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

        <section className={css(tw`mb-8`)}>
          <p className={css(tw`mb-3 leading-relaxed`)}>
            Hi! 👋 I am a Software Developer with 5 years of experience working
            mostly with front end web and cross-platform mobile development with
            TypeScript, JavaScript, React and React Native.
          </p>

          <p className={css(tw`mb-3 leading-relaxed`)}>
            I am a team player, and enjoy learning and building reliable and
            maintainable software that enable delightful end user experience and
            empower stakeholders to achieve their goals and deliver impact.
          </p>

          <p className={css(tw`mb-3 leading-relaxed`)}>
            Things I&apos;ve been excited about and am exploring lately are iOS
            development with SwiftUI and full stack web development.
          </p>
        </section>

        <section className={css(tw`mb-8`)}>
          <h3 className={css(tw`mb-2 font-semibold`)}>Connect with me:</h3>
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
      <Icon className={css(tw`text-gray-500 dark:text-gray-400`)} />
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
