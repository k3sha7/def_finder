import { useEffect, useState } from "react";
import { Company, Location, Moon, Search, Sun, Twitter, Website } from "../assets"
import { useTheme } from "../context/ThemeContext"

const Details = ({ data }) => {

  const formatDate = date => new Date(date).toString().slice(4,15)
  const checkNull = (data) => (data ? data : <span className="opacity-60"> Not Available </span>);

   return (
     <>
       <img
         className="w-28 h-28 rounded-full hidden lg:inline-block"
         src={data.avatar_url}
         alt="img"
       />
       <div className="lg:px-9 w-full">
         <div className="flex lg:justify-between">
           <img
             className="w-20 h-20 md:w-24 md:h-24 mr-6 rounded-full lg:hidden inline-block"
             src={data.avatar_url}
             alt="img"
           />
           <div>
             <p className="font-mono tracking-wide font-semibold md:text-2xl lg:mb-2">
               {checkNull(data.name)}
             </p>
             <a
               target="_blank"
               href={data.html_url}
               className="font-thin text-blue-500 inline-block py-2 lg:p-0"
             >
               @{data.login}
             </a>
             <p className="font-mono text-sm opacity-70 lg:hidden">
               Joined {formatDate(data.created_at)}
             </p>
           </div>
           <p className="font-mono text-sm opacity-70 hidden lg:inline-block">
             Joined {formatDate(data.created_at)}
           </p>
         </div>
         <p className={`py-8 ${data.bio ? "" : "opacity-70"}`}>
           {data.bio ? data.bio : "This profile has no bio"}
         </p>
         <div className="bg-[#F0F0F0] dark:bg-[#141c2f] mb-8 flex rounded-lg py-5 px-8">
           <div className="w-1/3">
             <p className="text-xs opacity-70 mb-2">Repos</p>
             <span className="text-xl font-mono font-bold">
               {data.public_repos}
             </span>
           </div>
           <div className="w-1/3">
             <p className="text-xs opacity-70 mb-2">Followers</p>
             <span className="text-xl font-mono font-bold">
               {data.followers}
             </span>
           </div>
           <div className="w-1/3">
             <p className="text-xs opacity-70 mb-2">Following</p>
             <span className="text-xl font-mono font-bold">
               {data.following}
             </span>
           </div>
         </div>
         <div className="flex flex-col md:flex-row text-sm flex-wrap">
           <div className="md:w-1/2 flex mb-6">
             <Location className="dark:text-white block mr-4" />
             <p className="whitespace-nowrap">{checkNull(data.location)}</p>
           </div>
           <div className="md:w-1/2 flex mb-6">
             <Twitter className="dark:text-white mr-3 md:ml-4" />
             <p className="whitespace-nowrap">
               {checkNull(data.twitter_username)}
             </p>
           </div>
           <div className="md:w-1/2 flex mb-6">
             <Website className="dark:text-white md:mr-3" />
             <p className="whitespace-nowrap">{checkNull(data.blog)}</p>
           </div>
           <div className="md:w-1/2 flex mb-6">
             <Company className="dark:text-white mr-3 md:ml-4" />
             <p className="whitespace-nowrap">{checkNull(data.company)}</p>
           </div>
         </div>
       </div>
     </>
   );
}

export const Github = () => {
	const [user, setUser] = useState('octocat')
  const [userData, setUserData] = useState({})
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    searchUser()
  }, [])
	const searchUser = async () => {
		try {
			const data = await (await fetch(`https://api.github.com/users/${user}`)).json()
      setUserData(data)
		} catch (err) { console.error(err) }
	}
  return (
    <div
      className="bg-[#F0F0F0] dark:bg-git-b-1 dark:text-white flex h-screen justify-center items-center font-git"
    >
      <div className="px-[6vw] md:p-0 md:w-2/3">
        <div className="flex justify-between mb-10">
          <span className="text-2xl font-mono font-semibold">devfinder</span>
          <button
            className="font-mono text-sm tracking-widest"
            onClick={()=>toggleTheme( theme==='dark'? 'light' : 'dark' )}
          >
            {theme==='light' ? (
              <span className="flex">
                LIGHT <Sun className="ml-3" />
              </span>
            ) : (
              <span className="flex">
                DARK <Moon className="ml-3" />
              </span>
            )}
          </button>
        </div>
        <div className="bg-white shadow-md dark:bg-git-b-2 rounded-lg p-2 flex">
          <Search className="text-[#0477FF] w-12 opacity-70 inline-block mt-2 mr-1 md:mx-4 md:my-2" />
          <input
            className="bg-transparent w-full outline-0 text-sm md:text-base"
            type="text"
            placeholder="Search GitHub username..."
            onChange={(e) => setUser(e.target.value)}
          />
          <button
            className="bg-[#0477FF] text-white px-5 py-2 rounded-lg"
            onClick={searchUser}
          >
            Search
          </button>
        </div>
        <div className="bg-white shadow-md dark:bg-git-b-2 rounded-lg p-8 flex mt-5">
          {userData.message === "Not Found" ? (
            <span className="text-xl"> No User Found... </span>
          ) : (
            <Details data={userData} />
          )}
        </div>
      </div>
    </div>
  );
};
