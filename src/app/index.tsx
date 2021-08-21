import * as React from 'react';
import styles from './index.scss';
import classNames from 'classnames';
import videoStart from '../../static/start.mp4';
import videoMain from '../../static/main_bg.mp4';
import imageLoading from '../../static/loading.gif';

export function App(): JSX.Element {
  const [loading1, setLoading1] = React.useState(true);
  const [loading2, setLoading2] = React.useState(true);

  const ref1 = React.useRef<HTMLVideoElement>();
  const [status1, setStatus1] = React.useState(0);
  const handleLoad1 = React.useCallback(async () => {
    setLoading1(false);
  }, []);
  React.useEffect(() => {
    if (!loading1 && !loading2 && status1 === 0) {
      setStatus1(1);
      ref1.current.play();
    }
  }, [loading1, loading2, status1]);
  const handleEnd1 = React.useCallback(() => {
    setStatus1(2);
    ref2.current.play();
  }, []);

  const ref2 = React.useRef<HTMLVideoElement>();
  const handleLoad2 = React.useCallback(async () => {
    setLoading2(false);
  }, []);

  return (
    <div className={styles.app}>
      <div
        className={classNames(styles.loadingContainer, loading1 || loading2 || styles.hide)}
        style={{ backgroundImage: `url(${imageLoading})` }}
      />

      <video
        className={classNames(styles.videoStart, (loading1 || status1 === 2) && styles.hide)}
        muted
        preload="auto"
        ref={ref1}
        onLoadedData={handleLoad1}
        onEnded={handleEnd1}
      >
        <source src={videoStart} type="video/mp4" />
      </video>

      <video
        className={classNames(styles.videoMain, status1 === 2 || styles.hide)}
        muted
        preload="auto"
        loop
        ref={ref2}
        onLoadedData={handleLoad2}
      >
        <source src={videoMain} type="video/mp4" />
      </video>
    </div>
  );
}
