import {useQuery} from '@tanstack/react-query';
import {BASE_URL} from "../url.ts";

const USER_INFO_PATH = '/api/v1/user-info';

export const useAuth = () => {
    return useQuery({
        queryKey: ['whoami'],
        queryFn: async () => {
            const res = await fetch(`${BASE_URL}${USER_INFO_PATH}`, { credentials: 'include' });
            if (!res.ok) {
                throw new Error('Not authenticated');
            }
            return res.json();
        },
        retry: false
    });
};