import './App.css'
import Header from './components/Header'
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className='text-5xl'>Typical Questions About Node.js</h1>
        <section className='mt-5 flex flex-col gap-3'>
          <article className='card min-h-9 min-w-9 flex flex-col gap-1'>
            <section className='flex flex-col gap-1 bg-transparent items-start'>
              <span className='bg-transparent text-xs badget-dificult'>Easy</span>
              <span className='bg-transparent text-xs badget'>#last question</span>
              <span className='bg-transparent text-xs badget'>#popular question</span>
              <span className='bg-transparent text-xs flex items-center'>
                <div className='h-3 bg-white w-[2px] rounded-md mr-1'></div>
                Jun 5 2024</span>
            </section>
            <h1 className='bg-transparent text-2xl'>What is Node.js?</h1>
            <section className='text-xs flex gap-1 bg-transparent'>
              <article className='bg-transparent badget'>#Nodejs</article>
              <article className='bg-transparent badget'>#Js</article>
              <article className='bg-transparent badget'>#Popular</article>
            </section>
            <p className='bg-transparent text-xs'>As an asynchronous event-driven JavaScript runtime,
              Node.js is designed to build scalable network applications.
            </p>
          </article>
          <article className='card min-h-9 min-w-9 flex flex-col gap-1'>
            <section className='flex gap-1 bg-transparent items-start'>
              <span className='bg-transparent text-xs flex items-center'>
                <div className='h-3 bg-white w-[2px] rounded-md mr-1'></div>
                May 20 2024
              </span>
            </section>
            <h1 className='bg-transparent text-lg'>Most Valuable Contributor</h1>
            <section className='flex bg-transparent items-center'>
              <img className='rounded-full contributor' src="https://unavatar.io/github/mdo" height={30} width={30} alt="" />
              <div className='flex flex-col bg-transparent'>
                <h5 className='bg-transparent text-lg'>Rick Lamas</h5>
                <h6 className='bg-transparent text-[8px]'>Software Developer at Microsoft</h6>
              </div>
            </section>
            <section className='flex bg-transparent gap-1'>
              <div className='bg-transparent flex items-center gap-1'>
                <button className='btn text-xs'><span>Git hub</span></button>
              </div>
              <div className='bg-transparent flex items-center gap-1'>
                <button className='btn text-xs'><span>LinkedIn</span></button>
              </div>
            </section>
          </article>
          <article className='relative'>
            <img src="./blog_nodejs.webp" className='rounded-sm w-full blog cursor-pointer' alt="" height={160} />
            <a href=""></a>
            <footer className='card__footer absolute w-full flex items-center px-2'>
              <span className='text-white bg-transparent text-sm'>Official Nodejs blog &rarr;</span>
            </footer>
          </article>
        </section>
        <section className='flex gap-3 flex-col'>
          <h5 className='text-4xl mt-8'>The Most Searchable Questions...</h5>
          <article className='card min-h-9 min-w-9 flex flex-col gap-1'>
            <section className='flex flex-col gap-1 bg-transparent items-start'>
              <span className='bg-transparent text-xs badget-dificult'>Easy</span>
              <span className='bg-transparent text-xs flex items-center'>
                <div className='h-3 bg-white w-[2px] rounded-md mr-1'></div>
                Dec 28 2024</span>
            </section>
            <h1 className='bg-transparent text-xl'>What is Node.js?</h1>
            <a className='bg-transparent text-sm' href="">Read more...</a>
          </article>
          <article className='card min-h-9 min-w-9 flex flex-col gap-1'>
            <section className='flex flex-col gap-1 bg-transparent items-start'>
              <span className='bg-transparent text-xs badget-dificult'>Intermediate</span>
              <span className='bg-transparent text-xs flex items-center'>
                <div className='h-3 bg-white w-[2px] rounded-md mr-1'></div>
                Jan 02 2024</span>
            </section>
            <h1 className='bg-transparent text-xl'>What is the Event Loop in Node.js and how does it work?</h1>
            <a className='bg-transparent text-sm' href="">Read more...</a>
          </article>
          <article className='card min-h-9 min-w-9 flex flex-col gap-1'>
            <section className='flex flex-col gap-1 bg-transparent items-start'>
              <span className='bg-transparent text-xs badget-dificult'>Hard</span>
              <span className='bg-transparent text-xs flex items-center'>
                <div className='h-3 bg-white w-[2px] rounded-md mr-1'></div>
                Feb 18 2024</span>
            </section>
            <h1 className='bg-transparent text-xl'>How would you optimize a Node.js application for high performance and scalability?</h1>
            <a className='bg-transparent text-sm' href="">Read more...</a>
          </article>
        </section>
        <section className='flex flex-col gap-2 questions bg-transparent'>
          <h5 className='text-4xl bg-transparent mt-8'>All disponible questions</h5>
          <a className='text-white no-underline text-sm hover:underline cursor-pointer' href="#">What is the difference between Node.js and Express.js?</a>
          <a className='text-white no-underline text-sm hover:underline cursor-pointer' href="#">How is asynchronous handling done in Node.js, and what are the differences between callbacks, promises, and async/await?</a>
          <a className='text-white no-underline text-sm hover:underline cursor-pointer' href="#">What are middlewares in Express.js, and how are they used?</a>
          <a className='text-white no-underline text-sm hover:underline cursor-pointer' href="#">How do you handle errors in Express.js?</a>
          <a className='text-white no-underline text-sm hover:underline cursor-pointer' href="#">How do you secure an Express.js app against common attacks?</a>
        </section>
      </main>
    </>
  )
}

export default App;