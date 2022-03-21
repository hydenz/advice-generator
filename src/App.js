import DividerMobile from "./assets/pattern-divider-mobile.svg";
import DividerDesktop from "./assets/pattern-divider-desktop.svg";
import DiceIcon from "./assets/icon-dice.svg";
import useAdvice from "./hooks/useAdvice";
import Loading from "./Loading";

function App() {
  const { advice, isLoading, error, fetchNewAdvice } = useAdvice();

  return (
    <div className="box">
      <span className="advice-num">
        Advice #{error || isLoading ? "?" : advice.id}
      </span>
      <div className="advice-container">
        {isLoading && <Loading />}
        {error && !isLoading && (
          <span className="advice">
            An error ocourred while trying to fetch an advice, please try again
            later.
          </span>
        )}
        {!error && !isLoading && <q className="advice">{advice.text}</q>}
      </div>
      <picture className="divider">
        <source srcSet={DividerMobile} media="(max-width: 375px)" />
        <source srcSet={DividerDesktop} media="(min-width: 800px)" />
        <img src={DividerMobile} alt="" />
      </picture>
      <button className="dice-container" onClick={fetchNewAdvice}>
        <img src={DiceIcon} alt="" />
      </button>
    </div>
  );
}

export default App;
