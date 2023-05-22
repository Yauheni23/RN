// import AsyncStorage from '@react-native-async-storage/async-storage';
import decode from 'jwt-decode';
import setToken from './setToken';

let data = null

export const getFromAsyncStorage = async (key, setUser) => {
  try {
    // const value = await AsyncStorage.getItem(key);
    const value = data;
    if(value !== null) {
      // const parsedUser = JSON.parse(value);
      const parsedUser = data;
      if (parsedUser.token) {
        const { token } = parsedUser;
        const payload = decode(token);
        const user = {
          token,
          id: payload.id,
          name: payload.name
        };
        setUser(user);
      }
    }
  } catch (error) {
    console.log("ERROR: ", error)
  }
};

export const setToAsyncStorage = async (key, user) => {
  try {
    // await AsyncStorage.setItem(key, JSON.stringify(user));
    data = user
    const { token } = user;
    setToken(token);
  } catch (error) {
    console.log("ERROR: ", error)
  }
};
