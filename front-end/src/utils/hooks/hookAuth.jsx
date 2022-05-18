import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../redux/userSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.UserSlice);
  return {
    auth,
    setAuth: (payload) => dispatch(setAuth(payload)),
  };
};

export default useAuth;
