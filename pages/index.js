import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techqueria Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <div className="container mx-auto px-6 py-2 flex ">
          <a className="font-bold text-2xl lg:text-4xl" href="#">
            Techqueria &nbsp;
            <img src="/favicon.ico" alt="" className="inline-block h-8	" />
          </a>
          {/* <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div> */}
          {/* <div class="hidden lg:block">
            <ul class="inline-flex">
              <li><a class="px-4 font-bold" href="/">Home</a></li>
              <li><a class="px-4 hover:text-gray-800" href="#">About</a></li>
              <li><a class="px-4 hover:text-gray-800" href="#">Contact</a></li>
            </ul> */}
          {/* </div> */}
        </div>
      </nav>


      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to Techqueria
        </h1> */}
        <div className={styles.coverImage}>
          <Image
            className={styles.image}
            src="/cover.jpeg"
            alt="Techqueria at digital ocean in NY "
            layout='fill'
          />
        </div>
        <p><br />We're a community of Latinx professionals in the tech industry techqueria&nbsp;
          <a className={styles.link} href="https://twitter.com/search?q=%23LatinxTechTwitter&src=hashtag_click" target="_blank">#LatinxTechTwitter </a>
        </p>
        <p>
          We host and sponsor networking events and informative classes panels.
          </p>
        <p>Join our Discord to become a member and stay connected!</p>



        <div className={styles.grid}>
          <a href="https://discord.gg/sezb2JpAyz" target="_blank" className={styles.card}>
            <h3>Discord &rarr;</h3>
            <p>Join our online community in discord for fun music and chats, and access to our classes, events and mentoring.</p>
          </a>

          <a href="https://twitter.com/techqueriacm" target="_blank" className={styles.card}>
            <h3>Twitter &rarr;</h3>
            <p>Follow to hear about new events and updates</p>
          </a>

          <a href="https://twitter.com/techquerianyc" target="_blank" className={styles.card}>
            <h3>@TechqueriaNYC &rarr;</h3>
            <p>Follow Techqueria NYC on twitter,  for local updates and events</p>
          </a>

          <a href="https://techqueria.org/join" target="_blank" className={styles.card}>
            <h3>Slack &rarr;</h3>
            <p>Apply to join the community on slack</p>
          </a>

          <a href="https://www.facebook.com/groups/techqueria" target="_blank" className={styles.card}>
            <h3>Facebook Group &rarr;</h3>
            <p>If facebook is your thing, join this group to interact with the community</p>
          </a>


          <a href="https://github.com/dvidsilva/techqueria-cm" target="_blank" className={styles.card}>
            <h3>Github &rarr;</h3>
            <p>This page is a NextJs project, if you'd like to help us improve it, PRs are welcome</p>
          </a>





          {/* <a href="https://www.techqueriacommunitynetwork.com/" target="_blank" className={styles.card}>
            <h3>Open letter to Techqueria</h3>
            <p>Letter with some requests to Techqueria!</p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by&nbsp;<a
          href="https://twitter.com/dvidsilva"
          target={'_blank'}
        >
          @dvidsilva
        </a>
        &nbsp;since 2015
      </footer>
    </div>
  )
}
