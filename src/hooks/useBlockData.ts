import { useSelector } from 'react-redux';
import { RootState } from '../store/index';

function useBlockData() {
    const { latestBlock } = useSelector((state: RootState) => state.block);

    return { latestBlock };
}

export default useBlockData;
