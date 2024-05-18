import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  followUserAction,
  unfollowUserAction,
} from '../../store/actions/userActions'
import ProfilePicture from './profilePicture'
import { useNavigate } from 'react-router-dom'

const UserCardSm = ({ user }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  const followStatus = currentUser.follows.some(
    followeeId => followeeId === user._id
  )

  const toggleFollow = async () => {
    if (followStatus) {
      dispatch(unfollowUserAction(currentUser._id, user._id))
    } else {
      dispatch(followUserAction(currentUser._id, user._id))
    }
  }

  const navigateToProfile = () => {
    navigate(`/profile/${user._id}`)
  }

  return (
    <div className='bg-white flex items-center justify-between px-4 py-2 rounded-xl mb-2 border border-primary border-opacity-30'>
      <div className='flex items-center flex-1' onClick={navigateToProfile}>
        <ProfilePicture
          imageUrl={user.profile.profilePictureUrl}
          width={10}
          height={10}
        />
        <div>
          <p className='font-semibold text-md'>{user.profile.name}</p>
          <p className='text-gray text-sm'>@{user.username}</p>
        </div>
      </div>
      <button
        onClick={toggleFollow}
        className='bg-secondary hover:bg-background font-semibold text-sm p-2 rounded'
      >
        {followStatus ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  )
}

export default UserCardSm
