import { useLocation, Navigate} from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/slices/userSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  const location = useLocation();

  return isAuth ? (
      <div>
        <h1>Hello {email}</h1>
        <button
          onClick={() => dispatch(removeUser())}
        >Log out from {email}</button>
      </div>
      ) : (
      <Navigate to="/login" state={{ from: location }} replace />
  )
};

export default HomePage;