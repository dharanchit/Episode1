import axios from 'axios';

const validateToken = async (token: string) => {
    const res = await axios.post('http://localhost:2000/user/validate-token', { token });
    if (res.status === 200) {
        return res.data.valid;
    }
    return false;
};

export default validateToken;