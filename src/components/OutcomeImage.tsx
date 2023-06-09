import { OutcomeStatistics } from "../lib/CommonTypes";

import pikachuThumbImage from "./../assets/images/positive/pikachu_thumb.jpeg";
import pikachuPositive5Image from "./../assets/images/positive/pikachu5.jpeg";
import pikachuPositive10Image from "./../assets/images/positive/pikachu10.jpeg";
import pikachuPositive20Image from "./../assets/images/positive/pikachu20.jpeg";
import pikachuPositive30Image from "./../assets/images/positive/pikachu30.jpeg";
import pikachuPositive40Image from "./../assets/images/positive/pikachu40.jpeg";
import pikachuSadImage from "./../assets/images/negative/pikachu_sad.jpeg";
import pikachuSadImage2 from "./../assets/images/negative/pikachu_sad_2.jpeg";

import styled from "@emotion/styled";

const AttemptResultImage = styled.img`
  max-width: 300px;
`;

type OutcomeImageProps = {
    statistics: OutcomeStatistics;
};

const getImage = (statistics: OutcomeStatistics): string | undefined => {
  if (statistics.failedInARow > 2) {
    return pikachuSadImage2;
  }
  if (statistics.failedInARow > 0) {
    return pikachuSadImage;
  }
  if (statistics.succeededInARow >= 40) {
    return pikachuPositive40Image;
  }
  if (statistics.succeededInARow >= 30) {
    return pikachuPositive30Image;
  }
  if (statistics.succeededInARow >= 20) {
    return pikachuPositive20Image;
  }
  if (statistics.succeededInARow >= 10) {
    return pikachuPositive10Image;
  }
  if (statistics.succeededInARow >= 5) {
    return pikachuPositive5Image;
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