import Image from 'next/image'
import { FC } from 'react'

import classes from './hero.module.css'

const Hero: FC = () => (
  <section className={classes.hero}>
    <div className={classes.image}>
      <Image
        src="/images/site/me.jpg"
        alt="An image showing Amir"
        width={300}
        height={300}
      />
    </div>
    <h1>Hi, I&apos;m Amir</h1>
    <p>
      I blog about app development - especially JavaScript stuff like ReactJS,
      Next.JS or React Native Expo
    </p>
  </section>
)

export default Hero
