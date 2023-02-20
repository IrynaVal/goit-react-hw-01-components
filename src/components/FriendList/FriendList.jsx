import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { List, Item, Name, Icon} from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return <List>
        {friends.map(friend => <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            /> )}
 </List>
}

const FriendListItem = ({ avatar, name, isOnline }) => {
    return <Item>
        <Icon isActive={isOnline}><BsFillCircleFill  /></Icon>
        <img src={avatar} alt="User avatar" width="48" />
        <Name>{ name}</Name>
</Item>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};

FriendListItem.propTypes = {     
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};