import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store';

function useNavigation() {
    const { loggedIn } = useSelector((state: RootState) => state.auth);
    const history = useHistory();

    useEffect(() => {
        if (loggedIn) {
            history.push('/');
        } else {
            history.push('/login');
        }
    }, [loggedIn, history]);
}

export default useNavigation;
