import React from 'react';
import styled from 'styled-components';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --line-separation: var(--color-gray-300);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-bottom: 48px;
  gap: 16px; // Temporary fix

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: minmax(min(300px, 100%), 2fr) minmax(240px, 1fr);
    grid-template-areas:
      'main-story secondary-stories'
      'main-story secondary-stories'
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: minmax(min(400px, 50%), 3fr) minmax(360px, 2fr) minmax(
        300px,
        1fr
      );
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 0; // Temporary fix
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.desktopAndUp} {
    border-right: 1px solid var(--line-separation);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.desktopAndUp} {
    border-right: 1px solid var(--line-separation);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--line-separation);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.desktopAndUp} {
    border-top: 1px solid var(--line-separation);
    padding-top: 16px;
    margin-top: 16px;
    padding-bottom: 16px;
  }
`;

export default MainStoryGrid;
