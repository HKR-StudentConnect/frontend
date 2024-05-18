import React from 'react'
import ProfilePicture from '../user/profilePicture'

const ProfileHeader = ({ user }) => {
  return (
    <div className='bg-background2 p-12 rounded-2xl'>
      <div className='flex items-center space-x-16 text-black'>
        <ProfilePicture
          imageUrl={user.profile.profilePictureUrl}
          width={36}
          height={36}
        />
        <div className='w-1/2'>
          <h1 className='text-xl font-bold'>{user.username}</h1>
          <div className='flex space-x-16 my-4'>
            <div className='text-lg'>
              <strong>{user.posts.length}</strong> posts
            </div>
            <div className='text-lg'>
              <strong>{user.followers.length}</strong> followers
            </div>
            <div className='text-lg'>
              <strong>{user.follows.length}</strong> following
            </div>
          </div>
          <h1 className='text-lg font-bold'>{user.profile.name}</h1>
          <p className='text-lg'>{user.profile.bio}</p>
          <p className='text-lg'>{user.profile.university}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader