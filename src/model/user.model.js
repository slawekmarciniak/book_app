export const UserRole = {
    ROLE_USER: 'ROLE_USER',
    ROLE_ADMIN: 'ROLE_ADMIN'
};

export class User {
    /** @property string */
    email;

    /** @property string */
    password;

    /** @property string */
    displayName;

    /** @property UserRole (above) */
    role;
}