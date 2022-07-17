import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
    .circle {
        background: #1d83e2;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .circle-text{
      position: relative;
      top: 16px;
      left: 3px;
    }
`;

function ProfileSection() {
  return (
    <ProfileWrapper>
        <div className='circle'>
            <span className='circle-text'>Profile</span>
        </div>
    </ProfileWrapper>
  )
}

export default ProfileSection