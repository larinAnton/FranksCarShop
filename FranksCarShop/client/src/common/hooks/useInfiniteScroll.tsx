import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';

interface useInfiniteScrollProps {
    fetchData: (page: number) => void;
}

const useInfiniteScroll = (props: useInfiniteScrollProps) => {
    const [page, setPage] = useState(0);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            props.fetchData(page);

            setPage((page) => page + 1);
        }
    }, [inView]);

    return { ref };
};

export default useInfiniteScroll;
