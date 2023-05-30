import { OutcomeStatistics } from "../lib/CommonTypes";

import pikachuThumbImage from "./../assets/images/positive/pikachu_thumb.jpeg";
import pikachuPositive10Image from "./../assets/images/positive/pikachu10.jpeg";
import pikachuPositive20Image from "./../assets/images/positive/pikachu20.jpeg";
import pikachuSadImage from "./../assets/images/negative/pikachu_sad.jpeg";

import styled from "@emotion/styled";

const AttemptResultImage = styled.img`
  max-width: 300px;
`;

type OutcomeImageProps = {
    statistics: OutcomeStatistics;
};

const getImage = (statistics: OutcomeStatistics): string | undefined => {
  if (statistics.failedInARow > 0) {
    return pikachuSadImage;
  }
  if (statistics.succeededInARow >= 20) {
    return pikachuPositive20Image;
  }
  if (statistics.succeededInARow >= 10) {
    return pikachuPositive10Image;
  }
  if (statistics.succeededInARow >= 1) {
    return pikachuThumbImage;
  }
}

const OutcomeImage = ({
    statistics
  }: OutcomeImageProps): React.ReactElement => {
    const outcomeImage = getImage(statistics);

    return (
        <>
        {outcomeImage !== undefined && (
            <AttemptResultImage
              src={outcomeImage}
              alt="outcome"
            ></AttemptResultImage>
          )}
        </>
    );
  };
  
  export default OutcomeImage;