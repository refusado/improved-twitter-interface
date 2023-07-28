export interface ITweetData {
  id?: number;
  content: string,
  time: number,
  author: {
    name: string,
    userName: string,
  },
  stats: {
    replys: number,
    retweets: number,
    likes: number,
    views: number
  }
}

export function Tweet(tweet: ITweetData) {
  const name = tweet.author.name;
  const user = `@${tweet.author.userName}`;
  const time = tweet.time < 60 ? `${tweet.time}m` : `${Math.floor(tweet.time / 60)}h`;

  return (
    <article className="flex gap-3 px-4 py-3 duration-300 border cursor-pointer hover:bg-neutral-100 border-b-neutral-200">
      <div>
        <span className="inline-block w-10 h-10 duration-300 hover:brightness-90">
          <img className="h-full rounded-full" src="https://avatars.githubusercontent.com/u/89546855?v=4" alt="Avatar" />
        </span>
      </div>

      <div className="relative flex flex-col">
        <div className="flex items-center justify-between pb-1 text-sm">
          <p className="mr-6 break-all">
            <strong className="mr-1 text-neutral-800 hover:underline underline-offset-2">
              {name}
            </strong>
            <span className="mr-1 text-neutral-500">{user} ∙</span>
            <span className="text-neutral-500">{time}</span>
          </p>
          
          <div className="absolute -right-2">
            <span title="More" className="flex items-center justify-center font-bold tracking-widest duration-300 rounded-full w-9 h-9 text-neutral-500 hover:text-violet-600 hover:bg-violet-300/30">
              ∙∙∙
            </span>
          </div>
        </div>
        <div>
          <p>{tweet.content}</p>
        </div>
        <aside className="flex flex-wrap justify-between h-8 text-neutral-500">
          <button title="Reply" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
            <img src="/" alt="x" /><span>{tweet.stats.replys}</span>
          </button>
          <button title="Retweet" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
            <img src="/" alt="x" /><span>{tweet.stats.retweets}</span>
          </button>
          <button title="Like" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
            <img src="/" alt="x" /><span>{tweet.stats.likes}</span>
          </button>
          <button title="View" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
            <img src="/" alt="x" /><span>{tweet.stats.views}</span>
          </button>
          <button title="Share" className="flex items-center justify-center px-2 duration-300 hover:brightness-110 hover:text-neutral-900">
            <img src="/" alt="x" />
          </button>
        </aside>
      </div>
    </article>
  );
}