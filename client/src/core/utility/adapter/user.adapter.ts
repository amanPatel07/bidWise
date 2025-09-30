import type { IUser } from '@auction/shared';
import { UserInfo } from '../../../shared/models/user.model';

export const toResponse = (response: IUser): UserInfo => {
    return { ...new UserInfo(response) };
};
