// pages/About/index.tsx
import { useAtom } from "jotai";
import Counter from "~/stores/counter";

const { countAtom } = Counter;

const About = () => {
    const [count] = useAtom(countAtom);

    return <div>About Page {count}</div>;
};

export default About;
