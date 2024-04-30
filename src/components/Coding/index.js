import React from 'react';
import { Desc } from "../Skills";
import { Container, Divider, Title, Wrapper, IconWrapper, CodeCards } from "./CodingStyle";
import { ReactComponent as HackerRank } from './coding/hackerrank.svg';
import { ReactComponent as LeetCode } from './coding/leetcode.svg';
import { ReactComponent as GeeksforGeeks } from './coding/geeksforgeeks.svg';
import { codingProfiles } from '../../data/constants';

const openLinkInNewTab = (url) => {
  const newWindow = window.open(url, '_blank');
  if (newWindow) newWindow.focus();
};

export const Coding = () => {
    const handleClick = (url) => () => {
        openLinkInNewTab(url);
    };

    return (
        <Container id="coding">
            <Wrapper>
                <Title>Coding Profiles</Title>
                <Desc>
                    I have maintained good Coding Profiles in different coding platforms. And used to participate in different coding contests during my college time.
                </Desc>
                <CodeCards>
                    <IconWrapper type="hackerrank" onClick={handleClick(codingProfiles.Hackerrank)}>
                        <HackerRank style={{ width: '20rem', height: '20rem' }} />
                    </IconWrapper>
                    <IconWrapper type="leetcode" onClick={handleClick(codingProfiles.Leetcode)}>
                        <LeetCode style={{ width: '20rem', height: '20rem' }} />
                    </IconWrapper>
                    <IconWrapper type="geeksforgeeks" onClick={handleClick(codingProfiles.geeksforgeeks)}>
                        <GeeksforGeeks style={{ width: '20rem', height: '20rem' }} />
                    </IconWrapper>
                </CodeCards>
                <Divider />
            </Wrapper>
        </Container>
    );
};
