import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <SportsStoryWrapper key={data.id}>
                <MiniStory  {...data} />
              </SportsStoryWrapper>
              ))}
          </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr minmax(0, 1fr);
  } ;
`;

const MarketsSection = styled.section`
  @media ${QUERIES.tabletAndUp} {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

const SportsSection = styled.section``;

const SportsStoryWrapper = styled.div`
   @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  };
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    overflow: auto;
  } ;
`;

export default SpecialtyStoryGrid;
