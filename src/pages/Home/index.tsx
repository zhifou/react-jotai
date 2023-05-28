// pages/Home/index.tsx
import { useAtom } from "jotai";
import Counter from "~/stores/counter";

const { countAtom } = Counter;

const Home = () => {
    const [count, setCount] = useAtom(countAtom);

    return (
        <div>
            <div>Home Page</div>
            <button onClick={() => setCount((c) => c + 1)}>
                counter: {count}
            </button>
        </div>
    );
};

export default Home;
