import Head from 'next/head'
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
        <h1 className={styles.title}>
          Welcome to Techqueria
        </h1>



        <div className={styles.grid}>
          <a href="https://discord.gg/qq8fYU2z3g" target="_blank" className={styles.card}>
            <h3>Discord &rarr;</h3>
            <p>Join us on discord for fun music and chats!</p>
          </a>

          <a href="https://www.techqueriacommunitynetwork.com/" target="_blank" className={styles.card}>
            <h3>Open letter to Techqueria</h3>
            <p>Letter with some requests to Techqueria!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
        >
          {/* Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
