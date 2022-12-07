import * as Popover from '@radix-ui/react-popover';

const Home = () => (
  <div className="bg-violet-400 h-screen w-screen p-10">
    <h1 className="text-center text-white text-3xl font-bold">
      Hello Next, Radix and Tailwind!
    </h1>  
    <Popover.Root>
      <Popover.Trigger className="rounded p-2 bg-white text-violet-900 hover:bg-violet-100">Show info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="p-2 rounded bg-white text-violet-900">
          Some more info…
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  </div>
);

export default Home;