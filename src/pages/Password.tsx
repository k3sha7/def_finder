
export const Password = () => {
  return (
    <div className="bg-pass-b-1 pass text-white h-screen flex justify-center items-center">
      <div className="w-2/5 md:w-2/3">
        <p className="text-center text-2xl font-semibold opacity-60 tracking-wider mb-8">
          Password Generator
        </p>
        <div className="bg-pass-b-2 flex px-6 py-4 text-xl">
          <input
            className="bg-transparent text-3xl font-bold w-full outline-0 tracking-wider"
            type="text"
            placeholder="P4$5W0rD"
            disabled
          />
          <button>copy</button>
        </div>
        <div className="bg-pass-b-2 text-lg font-semibold mt-8 p-5">
          <div className="flex justify-between">
            <p>Character Length</p>
            <p className="font-bold text-3xl text-pass-green">0</p>
          </div>
          <input className="slider w-full my-8" type="range" />
          <div className="flex">
            <input className="mr-4" type="checkbox" />
            <p>Include Uppercase Letters</p>
          </div>
          <div className="flex">
            <input className="mr-4" type="checkbox" />
            <p>Include Lowercase Letters</p>
          </div>
          <div className="flex">
            <input className="mr-4" type="checkbox" />
            <p>Include Numbers</p>
          </div>
          <div className="flex">
            <input className="mr-4" type="checkbox" />
            <p>Include Symbols</p>
          </div>
          <div className='bg-pass-b-1 my-8'>
            <p>strength</p>
            <div>
              <p>medium</p>
              <span></span>
            </div>
          </div>
          <button className='bg-pass-green text-pass-b-1 w-full p-4 font-bold'>
            GENERATE -
          </button>
        </div>
      </div>
    </div>
  );
}
