import React from "react";
import styled from "styled-components";
import { AvenirBookNormalStack14px, AvenirBlackEerieBlack16px } from "../../styledMixins";


function Profile() {
  return (
    <Profile1>
      <OverlapGroup>
        <FranklinJr>Natalie B</FranklinJr>
        <SuperAdmin>Stylist</SuperAdmin>
      </OverlapGroup>
      <Arrow src="/img/arrow-1@1x.png" />
    </Profile1>
  );
}

const Profile1 = styled.div`
  height: 55px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  min-width: 142px;
`;

const OverlapGroup = styled.div`
  width: 88px;
  height: 57px;
  position: relative;
  align-self: flex-end;
  margin-bottom: -2px;
`;

const FranklinJr = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 77px;
  height: 32px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const SuperAdmin = styled.div`
  ${AvenirBookNormalStack14px}
  position: absolute;
  width: 88px;
  height: 28px;
  top: 29px;
  left: 0;
  letter-spacing: 0;
  line-height: 14px;
`;

const Arrow = styled.img`
  width: 15px;
  height: 8px;
  margin-left: 39px;
  margin-top: 1px;
  object-fit: cover;
`;

const Profile2 = styled.div`
  height: 55px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  min-width: 142px;
`;

const OverlapGroup1 = styled.div`
  width: 88px;
  height: 57px;
  position: relative;
  align-self: flex-end;
  margin-bottom: -2px;
`;

const FranklinJr1 = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 77px;
  height: 32px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const SuperAdmin1 = styled.div`
  ${AvenirBookNormalStack14px}
  position: absolute;
  width: 88px;
  height: 28px;
  top: 29px;
  left: 0;
  letter-spacing: 0;
  line-height: 14px;
`;

const Arrow1 = styled.img`
  width: 15px;
  height: 8px;
  margin-left: 39px;
  margin-top: 1px;
  object-fit: cover;
`;

const Profile3 = styled.div`
  height: 55px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  min-width: 142px;
`;

const OverlapGroup2 = styled.div`
  width: 88px;
  height: 57px;
  position: relative;
  align-self: flex-end;
  margin-bottom: -2px;
`;

const FranklinJr2 = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 77px;
  height: 32px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const SuperAdmin2 = styled.div`
  ${AvenirBookNormalStack14px}
  position: absolute;
  width: 88px;
  height: 28px;
  top: 29px;
  left: 0;
  letter-spacing: 0;
  line-height: 14px;
`;

const Arrow2 = styled.img`
  width: 15px;
  height: 8px;
  margin-left: 39px;
  margin-top: 1px;
  object-fit: cover;
`;

const Profile4 = styled.div`
  height: 55px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  min-width: 142px;
`;

const OverlapGroup3 = styled.div`
  width: 88px;
  height: 57px;
  position: relative;
  align-self: flex-end;
  margin-bottom: -2px;
`;

const FranklinJr3 = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 77px;
  height: 32px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const SuperAdmin3 = styled.div`
  ${AvenirBookNormalStack14px}
  position: absolute;
  width: 88px;
  height: 28px;
  top: 29px;
  left: 0;
  letter-spacing: 0;
  line-height: 14px;
`;

const Arrow3 = styled.img`
  width: 15px;
  height: 8px;
  margin-left: 39px;
  margin-top: 1px;
  object-fit: cover;
`;

export default Profile;
