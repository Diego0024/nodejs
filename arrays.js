

const onlineStatus = users => {
    let finalStatus = '';
    let firstUser = '';
    let secondUser = ''
    const totalUsers = users.length;

    switch (totalUsers) {
        case 0:
            finalStatus = '0 online';
            break;
        case 1:
            firstUser = users[0];
            finalStatus = `${firstUser} online`;
            break;
        case 2:
            firstUser = users[0];
            secondUser = users[1];
            finalStatus = `${firstUser} and ${secondUser} online`;
            break;
        default:
            firstUser = users[0];
            secondUser = users[1];
            finalStatus = `${firstUser}, ${secondUser} and ${totalUsers - 2} more online`
            break;
    }

    return finalStatus;
};