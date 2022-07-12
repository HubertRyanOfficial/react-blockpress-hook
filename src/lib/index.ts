interface Props {
  onPress: () => void;
  onBlockButton: () => void;
  maximumClicks: number;
  seconds: number;
}

function useBlockPress({
  onPress = () => null,
  onBlockButton = () => null,
  maximumClicks = 10,
  seconds = 5000,
}: Props) {
  var TOTAL_OF_CLICKS: number = 0;
  var TIMEOUT: any = null;

  const handleButtonPress = () => {
    if (TOTAL_OF_CLICKS && TOTAL_OF_CLICKS <= maximumClicks) {
      clearTimeout(TIMEOUT);
    }

    TOTAL_OF_CLICKS += 1;

    if (TOTAL_OF_CLICKS == maximumClicks) {
      if (!!onBlockButton) onBlockButton();
      return;
    }

    if (!!onPress && TOTAL_OF_CLICKS < maximumClicks) onPress();

    TIMEOUT =
      TOTAL_OF_CLICKS > 0 && TOTAL_OF_CLICKS <= maximumClicks + 1
        ? setTimeout(() => {
            console.log("clear!");
            TOTAL_OF_CLICKS = 0;
          }, seconds)
        : null;
  };

  return handleButtonPress;
}

export { useBlockPress };
